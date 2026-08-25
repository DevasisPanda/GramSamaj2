#!/usr/bin/env python3
"""Extract text + tables from docx files, no external deps (zipfile + regex-free XML walk)."""
import sys, zipfile, os
import xml.etree.ElementTree as ET

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
W = NS["w"]

def para_text(p):
    parts = []
    for node in p.iter():
        tag = node.tag.split("}")[-1]
        if tag == "t" and node.text:
            parts.append(node.text)
        elif tag == "tab":
            parts.append("\t")
        elif tag == "br":
            parts.append(" / ")
    return "".join(parts)

def para_style(p):
    pPr = p.find("w:pPr", NS)
    if pPr is not None:
        st = pPr.find("w:pStyle", NS)
        if st is not None:
            return st.get(f"{{{W}}}val", "")
    return ""

def walk_body(body, out, depth=0):
    for child in body:
        tag = child.tag.split("}")[-1]
        if tag == "p":
            txt = para_text(child).strip()
            style = para_style(child)
            if txt:
                prefix = f"[{style}] " if style and "Heading" in style else ""
                out.append(prefix + txt)
        elif tag == "tbl":
            out.append("--- TABLE ---")
            for row in child.findall("w:tr", NS):
                cells = []
                for tc in row.findall("w:tc", NS):
                    cell_parts = []
                    for p in tc.iter(f"{{{W}}}p"):
                        t = para_text(p).strip()
                        if t:
                            cell_parts.append(t)
                    cells.append(" | ".join(cell_parts))
                out.append(" ;; ".join(cells))
            out.append("--- END TABLE ---")

def extract(path):
    out = [f"===== {os.path.basename(path)} ====="]
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)
    body = root.find("w:body", NS)
    if body is not None:
        walk_body(body, out)
    return "\n".join(out)

if __name__ == "__main__":
    for path in sys.argv[1:]:
        try:
            print(extract(path))
            print()
        except Exception as e:
            print(f"===== {path} ===== ERROR: {e}", file=sys.stderr)
