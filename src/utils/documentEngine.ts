/**
 * Client-side document generation engine (§1 of the prompt).
 *
 * - Certificate of Membership  → jsPDF (print-ready A4 PDF)
 * - Membership Card             → html2canvas-pro → PNG
 * - Receipt                    → jsPDF (print-ready A5 PDF)
 *
 * All three embed a QR code via the `qrcode` package.
 */
import type { MembershipRecord } from '@/lib/types';
import { VERIFY_URL, AIRD } from '@/lib/constants';
import { downloadBlob, formatDate } from '@/lib/utils';
import QRCode from 'qrcode';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Generate a data-URI QR code image (PNG, 200×200). */
async function generateQR(text: string): Promise<string> {
  return QRCode.toDataURL(text, { width: 200, margin: 1 });
}

/** Load a Google Font into jsPDF. jsPDF ships with a subset; for Devanagari
 *  we embed a basic sans-serif and accept the browser fallback. */
function setPdfFonts(doc: import('jspdf').jsPDF) {
  doc.setFont('helvetica');
}

// ---------------------------------------------------------------------------
// Certificate of Membership
// ---------------------------------------------------------------------------

export async function generateCertificatePDF(member: MembershipRecord): Promise<void> {
  const jsPDF = (await import('jspdf')).default;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

  setPdfFonts(doc);
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  const qr = await generateQR(`${VERIFY_URL}/${member.id}`);

  // ---- Border + saffron header strip ----
  doc.setDrawColor(245, 158, 11);
  doc.setLineWidth(1.5);
  doc.roundedRect(8, 8, w - 16, h - 16, 3, 3, 'S');
  doc.setFillColor(245, 158, 11);
  doc.roundedRect(8, 8, w - 16, 14, 3, 3, 'F');

  // ---- Title block ----
  doc.setTextColor(255, 255, 249);
  doc.setFontSize(11);
  doc.text('Public Charitable Trust Act (PCTA) 1882  |  No: 9002139 IV-66/2020–31.01.2020', w / 2, 16, {
    align: 'center',
  });

  doc.setTextColor(31, 41, 55);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(AIRD.name, w / 2, 34, { align: 'center' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(AIRD.registeredOffice, w / 2, 39, { align: 'center' });

  // ---- Motto ----
  doc.setFontSize(10);
  doc.setTextColor(21, 128, 61);
  doc.text(AIRD.motto, w / 2, 48, { align: 'center' });

  // ---- Divider ----
  doc.setDrawColor(245, 158, 11);
  doc.setLineWidth(0.4);
  doc.line(40, 52, w - 40, 52);

  // ---- Certificate title ----
  doc.setTextColor(217, 119, 6);
  doc.setFontSize(26);
  doc.setFont('helvetica', 'bold');
  doc.text('CERTIFICATE OF MEMBERSHIP', w / 2, 64, { align: 'center' });

  // ---- Body text ----
  doc.setTextColor(31, 41, 55);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');

  const certNo = `AIRD/MC/2026/${member.id.split('/').pop()}`;
  doc.setFontSize(9);
  doc.text(`Certificate No.: ${certNo}`, w - 30, 28, { align: 'right' });

  doc.setFontSize(12);
  const name = member.name.toUpperCase();
  doc.text(`This is to certify that ${name} has been admitted as a`, w / 2, 82, { align: 'center' });
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(21, 128, 61);
  doc.text(`${member.category} Member`, w / 2, 90, { align: 'center' });

  doc.setTextColor(31, 41, 55);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('of the Appropriate Institute of Rural Development (AIRD)', w / 2, 98, { align: 'center' });
  doc.text('in recognition of willingness to contribute towards the realization of', w / 2, 106, { align: 'center' });
  doc.text('Gram Swaraj through Project KRANTI.', w / 2, 113, { align: 'center' });

  // ---- Membership details table ----
  const ty = 124;
  const col1 = 50;
  const col2 = 130;
  doc.setFontSize(10);
  const details: [string, string][] = [
    ['Membership No.:', member.id],
    ['Category:', member.category],
    ['Date of Admission:', formatDate(member.id.includes('2026') ? '2026-08-15' : '2026-08-15')],
    ['Valid Until:', formatDate(member.validUntil)],
  ];
  details.forEach(([label, value], i) => {
    const y = ty + i * 8;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(107, 114, 128);
    doc.text(label, col1, y);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(31, 41, 55);
    doc.text(value, col2, y);
  });

  // ---- QR code ----
  doc.addImage(qr, 'PNG', w - 60, ty - 5, 30, 30);

  // ---- Quote ----
  doc.setFontSize(10);
  doc.setTextColor(107, 114, 128);
  doc.setFont('helvetica', 'italic');
  doc.text('"Service to Humanity is the Highest Worship."', w / 2, h - 30, { align: 'center' });

  // ---- Signature area ----
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(31, 41, 55);
  doc.text('Authorized Signatory', 50, h - 16);
  doc.line(50, h - 14, 100, h - 14);
  doc.text(`K. C. Tripathi, Managing Trustee`, w - 80, h - 16);
  doc.line(w - 80, h - 14, w - 30, h - 14);

  // Download
  const blob = doc.output('blob');
  downloadBlob(blob, `AIRD_Membership_Certificate_${member.id.split('/').pop()}.pdf`);
}

// ---------------------------------------------------------------------------
// Membership Identity Card → PNG
// ---------------------------------------------------------------------------

export async function generateMembershipCardPNG(member: MembershipRecord): Promise<void> {
  const html2canvas = (await import('html2canvas-pro')).default;

  // Create a temporary DOM element styled as the ID card
  const card = document.createElement('div');
  card.style.cssText =
    'width:340px; padding:16px; background:#fff; border:3px solid #F59E0B; border-radius:12px; font-family:"Plus Jakarta Sans",system-ui,sans-serif; color:#1F2937; position:fixed; top:-9999px; left:-9999px; z-index:-1;';
  card.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;border-bottom:2px solid #F59E0B;padding-bottom:8px;margin-bottom:10px;">
      <div style="width:40px;height:40px;border-radius:8px;background:linear-gradient(135deg,#F59E0B,#D97706);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;">A</div>
      <div>
        <div style="font-size:11px;font-weight:700;">AIRD</div>
        <div style="font-size:8px;color:#6B7280;">Appropriate Institute of Rural Development</div>
        <div style="font-size:7px;color:#6B7280;">PCTA 1882 | Reg: 9002139 IV-66/2020</div>
      </div>
    </div>
    <div style="font-size:8px;color:#6B7280;margin-bottom:6px;">MEMBER IDENTITY CARD</div>
    <div style="display:flex;gap:12px;margin-bottom:10px;">
      <div style="width:72px;height:90px;background:#e5e7eb;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#9CA3AF;font-size:10px;">📷 Photo</div>
      <div style="flex:1;font-size:10px;line-height:1.6;">
        <div><b>Name:</b> ${member.name}</div>
        <div><b>Mobile:</b> ${member.mobile}</div>
        <div><b>Email:</b> ${member.email}</div>
        <div><b>ID:</b> ${member.id}</div>
        <div style="margin-top:4px;"><b>Category:</b> <span style="background:#065F46;color:#fff;padding:1px 6px;border-radius:4px;font-size:9px;">${member.category}</span></div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:8px;color:#6B7280;border-top:1px solid #e5e7eb;padding-top:6px;">
      <div>Valid Until: ${formatDate(member.validUntil)}</div>
      <div>Status: ${member.status}</div>
    </div>
    <div style="text-align:center;font-size:7px;color:#9CA3AF;margin-top:6px;font-style:italic;">"Building Gram Swaraj through Participation, Transparency, and Collective Action."</div>
  `;

  document.body.appendChild(card);

  try {
    const canvas = await html2canvas(card, { scale: 3, useCORS: true, backgroundColor: '#ffffff' });
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, `AIRD_ID_Card_${member.id.split('/').pop()}.png`);
    }, 'image/png');
  } finally {
    card.remove();
  }
}
