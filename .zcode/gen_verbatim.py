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
print("done")
