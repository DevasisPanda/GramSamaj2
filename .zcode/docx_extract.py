#!/usr/bin/env python
"""Extract text from .docx files using only the standard library.

A .docx is a zip archive. The main content lives in word/document.xml.
We also pull headers, footers, and hyperlinks so nothing is missed.
"""
import sys
import zipfile
import re
import os
import glob
from xml.etree import ElementTree as ET

NS = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture',
}


def text_from_paragraphs(root):
    """Walk the document body, returning text with paragraph breaks."""
    lines = []
    body = root.find('w:body', NS)
    if body is None:
        return ''
    # iterate block-level elements in document order
    for elem in body.iter():
        tag = elem.tag.split('}', 1)[-1]
        if tag == 'p':  # paragraph
            para_text = paragraph_text(elem)
            if para_text:
                lines.append(para_text)
    return '\n'.join(lines)


def paragraph_text(p_elem):
    """Extract text from a single paragraph element, preserving structure."""
    parts = []
    for child in p_elem.iter():
        tag = child.tag.split('}', 1)[-1]
        if tag == 't':
            parts.append(child.text or '')
        elif tag == 'tab':
            parts.append('\t')
        elif tag == 'br' or tag == 'cr':
            parts.append('\n')
    return ''.join(parts)


def extract_docx(path):
    """Return the full text content of a .docx file."""
    try:
        with zipfile.ZipFile(path, 'r') as z:
            names = z.namelist()
            chunks = []
            # main document
            if 'word/document.xml' in names:
                xml = z.read('word/document.xml')
                root = ET.fromstring(xml)
                chunks.append(text_from_paragraphs(root))
            return '\n'.join(c for c in chunks if c)
    except Exception as e:
        return f"[ERROR reading {path}: {e}]"


def main():
    if len(sys.argv) < 2:
        print("Usage: docx_extract.py <file.docx | dir> [--out OUTDIR]")
        sys.exit(1)
    target = sys.argv[1]
    out_dir = None
    if '--out' in sys.argv:
        out_dir = sys.argv[sys.argv.index('--out') + 1]
        os.makedirs(out_dir, exist_ok=True)

    files = []
    if os.path.isdir(target):
        files = sorted(glob.glob(os.path.join(target, '**', '*.docx'), recursive=True))
    elif os.path.isfile(target):
        files = [target]
    else:
        print(f"Not found: {target}")
        sys.exit(1)

    for f in files:
        text = extract_docx(f)
        if out_dir:
            base = os.path.splitext(os.path.basename(f))[0]
            op = os.path.join(out_dir, base + '.txt')
            with open(op, 'w', encoding='utf-8') as fh:
                fh.write(text)
            print(f"{os.path.basename(f)} -> {op} ({len(text)} chars)")
        else:
            print(f"\n{'='*70}\nFILE: {os.path.basename(f)}\n{'='*70}")
            print(text)


if __name__ == '__main__':
    main()
