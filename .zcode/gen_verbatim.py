#!/usr/bin/env python3
"""Generate verbatim TypeScript content modules from .zcode/docs_txt extracts.

Guarantees frontend copy == Work/*.docx content byte-for-byte (via the
extraction pipeline). Run from repo root:  python .zcode/gen_verbatim.py
"""
import io, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TXT = os.path.join(ROOT, ".zcode", "docs_txt")
OUT = os.path.join(ROOT, "Frontend", "src", "data")

def read(name):
    with io.open(os.path.join(TXT, name), encoding="utf-8") as f:
        raw = f.read()
    # --- mojibake repair (cp1252 smart-quotes written into a utf-8 pipeline) ---
    raw = re.sub("\ufffd\\?o", "\u201c", raw)   # �?o -> left double quote
    raw = re.sub("\ufffd\\?\\?", "\u201d", raw) # �?? -> right double quote
    raw = re.sub("\ufffd\\?\"", "\u2014", raw)  # �?" -> em dash
    raw = raw.replace("\ufffd", "\u2019")       # stray -> right single quote
    lines = []
    for l in raw.splitlines():
        t = l.rstrip()
        if t.strip() in {"Top of Form", "Bottom of Form"}:
            continue
        # strip internal "Read more……." link markers (doc formatting, not content)
        t = re.sub(r"\s*Read more[.\u2026]+\s*$", "", t)
        lines.append(t)
    return lines

def ts_str(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

def emit(path, header, blocks):
    body = header + "\n\n" + "\n\n".join(blocks) + "\n"
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(body)
    print("wrote", os.path.relpath(path, ROOT))

# ---------------------------------------------------------------- contentVerbatim.ts
vision   = [l.strip() for l in read("Vision.txt")[1:]        if l.strip()]   # skip "Vision"
initi    = [l.strip() for l in read("Initiation.txt")[1:]    if l.strip()]   # skip "Initiation"
objectv  = [l.strip() for l in read("Objectives.txt")[1:]    if l.strip()]   # skip "Objectives:-"
aim      = [l.strip() for l in read("AIM.txt")[1:]           if l.strip()]   # skip "AIM:-"
facts    = [l.strip() for l in read("Facts of life.txt")     if l.strip()][1:] # skip "Fact of life"
humanity = [l.strip() for l in read("Humanity and Religion.txt") if l.strip()][1:] # skip heading
concept  = [l.strip() for l in read("Concept.txt")[1:]       if l.strip()]   # skip "Concept"

# Strategy1: split inline "Heading: body" paragraphs
strategy_blocks = []
for l in read("Strategy1.txt"):
    l = l.strip()
    if not l:
        continue
    m = re.match(r"^([A-Z][A-Za-z ,'&-]{4,60}):\s*(.+)$", l)
    if m and not m.group(2)[:2].isdigit():
        strategy_blocks.append({"heading": m.group(1).strip(), "body": m.group(2).strip()})
    else:
        strategy_blocks.append({"body": l})

def arr(name, items):
    return "export const %s: string[] = [\n%s\n];\n" % (
        name, ",\n".join("  " + ts_str(i) for i in items))

blocks = [
    "/**",
    " * VERBATIM content auto-generated from Work/*.docx via .zcode/docs_txt.",
    " * Regenerate with:  python .zcode/gen_verbatim.py",
    " * DO NOT hand-edit the arrays below - fix the source document instead.",
    " */",
]
blocks.append(arr("VISION_FULL", vision))
blocks.append(arr("INITIATION_PARAS", initi))
blocks.append(arr("OBJECTIVES_FULL", objectv))
blocks.append(arr("AIM_VERBATIM", aim))
blocks.append(arr("FACTS_OF_LIFE", facts))
blocks.append(arr("HUMANITY_AND_RELIGION", humanity))
blocks.append(arr("CONCEPT_PARAS", concept))
sb = ",\n".join(
    "  {" + (("heading: " + ts_str(b["heading"]) + ", ") if "heading" in b else "") +
    "body: " + ts_str(b["body"]) + "}"
    for b in strategy_blocks)
blocks.append(
    "/** Strategy1.docx - inline headings split into blocks (verbatim text). */\n"
    "export interface VerbatimBlock { heading?: string; body: string }\n"
    "export const STRATEGY_BLOCKS: VerbatimBlock[] = [\n" + sb + "\n];\n")
emit(os.path.join(OUT, "contentVerbatim.ts"), "\n".join(blocks[:4]), blocks[4:])

# ---------------------------------------------------------------- journeyFull.ts
j1 = read("Journey of trustee1.txt")
role_paras  = [l.strip() for l in j1[1:13] if l.strip()]   # lines 2-13: role description
autobio     = [l.strip() for l in j1[13:]    if l.strip()]  # lines 14+: first-person autobiography
jb = [
    "/**",
    " * VERBATIM Journey of Trustee - auto-generated from 'Journey of trustee1.txt'",
    " * (= Journey of trustee1.docx). Regenerate:  python .zcode/gen_verbatim.py",
    " */",
    "export const JOURNEY_ROLE_PARAS: string[] = [\n%s\n];\n" % ",\n".join("  " + ts_str(p) for p in role_paras),
    "export const JOURNEY_AUTOBIOGRAPHY: string[] = [\n%s\n];\n" % ",\n".join("  " + ts_str(p) for p in autobio),
]
emit(os.path.join(OUT, "journeyFull.ts"), jb[0], jb[1:])

# ---------------------------------------------------------------- annualReportFull.ts
INLINE_HEADING = re.compile(r"^([A-Z][^:]{3,60}):\s+(.+)$")

def heading_like(line):
    """Standalone sub-heading: short, ASCII-initial, no sentence punctuation.
    Devanagari lines (slogans etc.) are always body text."""
    if not re.match(r"[A-Za-z0-9]", line):
        return False
    if len(line) > 70:
        return False
    if line.endswith(":"):
        return True
    return not any(line.endswith(c) for c in ".;,?\u0964\u0965") and "\u20b9" not in line

def parse_report(fname, skip):
    secs, cur = [], None
    def flush():
        nonlocal cur
        if cur and (cur.get("paragraphs")):
            secs.append(cur)
        cur = None
    for line in read(fname)[skip:]:
        if not line.strip():
            continue
        m = INLINE_HEADING.match(line)
        if m:
            flush()
            cur = {"heading": m.group(1).strip(), "paragraphs": [m.group(2).strip()]}
        elif heading_like(line):
            flush()
            cur = {"heading": line.rstrip(":").strip(), "paragraphs": []}
        else:
            if cur is None:
                cur = {"paragraphs": []}
            cur.setdefault("paragraphs", []).append(line.strip())
    flush()
    return secs

REPORT_FILES = [
    ("ar2020-21", "2020\u201321", "Annual Report FY 2020\u201321", "annual report 2020-2021.txt", 6),
    ("ar2021-22", "2021\u201322", "Annual Report FY 2021\u201322", "L3.txt", 6),
    ("ar2022-23", "2022\u201323", "Annual Report FY 2022\u201323", "22-23.txt", 2),
    ("ar2023-24", "2023\u201324", "Annual Report FY 2023\u201324", "23-24.txt", 0),
    ("ar2024-25", "2024\u201325", "Annual Report FY 2024\u201325", "24-25.txt", 0),
    ("ar2025-26", "2025\u201326", "Annual Report FY 2025\u201326", "25-26.txt", 0),
]

def sect_lit(s):
    head = ("heading: " + ts_str(s["heading"]) + ",\n") if s.get("heading") else ""
    paras = ",\n".join("      " + ts_str(p) for p in s["paragraphs"])
    return "    {\n" + head + "    paragraphs: [\n" + paras + ",\n    ],\n    }"

entries = []
for rid, yr, label, fname, skip in REPORT_FILES:
    secs = parse_report(fname, skip)
    inner = ",\n".join(sect_lit(s) for s in secs)
    entries.append(
        "  '%s': {\n    id: %s,\n    year: %s,\n    label: %s,\n    sections: [\n%s,\n    ],\n  },"
        % (rid, ts_str(rid), ts_str(yr), ts_str(label), inner))

header_ab = (
    "/**\n"
    " * VERBATIM full-text Annual Reports - auto-generated from Work/*.docx\n"
    " * via .zcode/docs_txt (annual report 2020-2021=L2, L3=AR 2021-22,\n"
    " * 22-23, 23-24, 24-25, 25-26). Regenerate:  python .zcode/gen_verbatim.py\n"
    " */\n"
    "export interface FullReportSection {\n  heading?: string;\n  paragraphs: string[];\n}\n\n"
    "export interface FullAnnualReport {\n  id: string;\n  year: string;\n  label: string;\n  sections: FullReportSection[];\n}\n\n"
    "export const ANNUAL_REPORTS_FULL: Record<string, FullAnnualReport> = {")
emit(os.path.join(OUT, "annualReportFull.ts"), header_ab, entries + ["};"])

# ---------------------------------------------------------------- docFull.ts
# Project KRANTI (O) — split on numbered headings like "1.0 Introduction"
KRANTI_SECTION = re.compile(r"^(\d+\.0)\s+(.+)$")
kranti_secs, cur = [], {"heading": "Cover", "paragraphs": []}
for line in read("Project KRANTI.txt"):
    if not line.strip():
        continue
    m = KRANTI_SECTION.match(line)
    if m:
        kranti_secs.append(cur)
        cur = {"heading": (m.group(1) + " " + m.group(2)).strip(), "paragraphs": []}
    elif re.fullmatch(r"\d{1,2}", line.strip()):
        continue  # month-number columns of the timeline grid
    else:
        cur["paragraphs"].append(line.strip())
kranti_secs.append(cur)
kranti_secs = [s for s in kranti_secs if s["paragraphs"]]

phil = None  # (parser defined below)
def parse_generic(lines):
    """Inline 'Heading: body' + standalone heading detection (see reports)."""
    secs, cur = [], None
    def flush():
        nonlocal cur
        if cur and cur.get("paragraphs"):
            secs.append(cur)
        cur = None
    for line in lines:
        if not line.strip():
            continue
        m = INLINE_HEADING.match(line)
        if m:
            flush()
            cur = {"heading": m.group(1).strip(), "paragraphs": [m.group(2).strip()]}
        elif heading_like(line):
            flush()
            cur = {"heading": line.rstrip(":").strip(), "paragraphs": []}
        else:
            if cur is None:
                cur = {"paragraphs": []}
            cur.setdefault("paragraphs", []).append(line.strip())
    flush()
    return secs

philosophy_secs = parse_generic([l for l in read("Philosophy.txt")][1:])   # skip title
humanlife_secs  = parse_generic([l for l in read("Human life.txt")][1:])   # skip title

# Trustee biodata: "Key : Value" block + career rows after 'Professional:'
t_lines = [l.strip() for l in read("Trustee.txt") if l.strip()]
bio, career, mode = [], [], "bio"
for l in t_lines:
    if l == "BACKGROUND":
        continue
    if l.startswith("Educational"):
        continue
    if l.startswith("Professional"):
        mode = "career"
        continue
    if mode == "bio":
        m = re.match(r"^([A-Za-z][A-Za-z ./]*?)\s*:\s*(.+)$", l)
        if m:
            bio.append({"k": m.group(1).strip(), "v": m.group(2).strip()})
    else:
        career.append(l)

def secs_lit(secs):
    return ",\n".join(sect_lit(s) for s in secs)

dblocks = [
    "/**",
    " * VERBATIM full-document texts - auto-generated from Work/*.docx via",
    " * .zcode/docs_txt. Regenerate:  python .zcode/gen_verbatim.py",
    " */",
]
dblocks.append(
    "export interface DocSection { heading?: string; paragraphs: string[] }\n\n"
    "/** Project KRANTI.docx (=O) - complete project document. */\n"
    "export const KRANTI_DOCUMENT: DocSection[] = [\n" + secs_lit(kranti_secs) + ",\n];\n")
dblocks.append(
    "/** Philosophy.docx - complete text (the /philosophy page shows condensed pillars). */\n"
    "export const PHILOSOPHY_FULL: DocSection[] = [\n" + secs_lit(philosophy_secs) + ",\n];\n")
dblocks.append(
    "/** Human life.docx - complete text (home Humanity block is an excerpt). */\n"
    "export const HUMAN_LIFE_FULL: DocSection[] = [\n" + secs_lit(humanlife_secs) + ",\n];\n")
bio_lit = ",\n".join("  { k: %s, v: %s }" % (ts_str(b["k"]), ts_str(b["v"])) for b in bio)
car_lit = ",\n".join("  " + ts_str(c) for c in career)
dblocks.append(
    "/** Trustee.docx (=A) - biodata fields + professional career rows. */\n"
    "export const TRUSTEE_BIO: { k: string; v: string }[] = [\n" + bio_lit + ",\n];\n\n"
    "export const TRUSTEE_CAREER: string[] = [\n" + car_lit + ",\n];\n")
emit(os.path.join(OUT, "docFull.ts"), dblocks[0], dblocks[1:])
print("done")
