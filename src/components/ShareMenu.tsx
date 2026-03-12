import { useState, useRef, useEffect } from "react";
import {
  ShareIcon,
  XTwitterIcon,
  FacebookIcon,
  WhatsAppIcon,
  MessageIcon,
  DocumentIcon,
  ClipboardIcon,
} from "./Icons";
import type { HoleScore } from "./CourseOverview";

interface ShareMenuProps {
  courseName: string;
  date: string;
  mode: string;
  holesCompleted: number;
  scoreToPar: number;
  front9: HoleScore[];
  back9: HoleScore[];
}

function formatScore(score: number): string {
  if (score === 0) return "Even";
  if (score > 0) return `+${score}`;
  return `${score}`;
}

function buildShareText(props: ShareMenuProps): string {
  return `${props.courseName} | ${props.date}\n${props.holesCompleted} holes (${props.mode}) — ${formatScore(props.scoreToPar)} to par`;
}

function buildScorecardText(props: ShareMenuProps): string {
  const lines: string[] = [];
  lines.push(`${props.courseName}`);
  lines.push(`Date: ${props.date}  |  Format: ${props.mode}  |  Holes: ${props.holesCompleted}  |  Score: ${formatScore(props.scoreToPar)}`);
  lines.push("");

  const formatNine = (holes: HoleScore[], label: string) => {
    const holeNums = holes.map((h) => String(h.hole).padStart(3));
    const pars = holes.map((h) => String(h.par).padStart(3));
    const scores = holes.map((h) => String(h.score).padStart(3));
    const totalPar = holes.reduce((s, h) => s + h.par, 0);
    const totalScore = holes.reduce((s, h) => s + h.score, 0);

    lines.push(`Hole  ${holeNums.join("")}  ${label.padStart(4)}`);
    lines.push(`Par   ${pars.join("")}  ${String(totalPar).padStart(4)}`);
    lines.push(`Score ${scores.join("")}  ${String(totalScore).padStart(4)}`);
  };

  if (props.front9.length > 0) {
    formatNine(props.front9, "OUT");
  }
  if (props.back9.length > 0) {
    lines.push("");
    formatNine(props.back9, "IN");
  }

  return lines.join("\n");
}

function generatePDF(props: ShareMenuProps) {
  const text = buildScorecardText(props);
  const blob = new Blob(
    [
      `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj
5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Courier>>endobj
4 0 obj<</Length ${encodePDFStream(text).length}>>
stream
${encodePDFStream(text)}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
trailer<</Size 6/Root 1 0 R>>
startxref
0
%%EOF`,
    ],
    { type: "application/pdf" }
  );

  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  const lines = text.split("\n");
  printWindow.document.write(`
    <html>
      <head>
        <title>${props.courseName} Scorecard</title>
        <style>
          body { font-family: 'Courier New', monospace; padding: 40px; }
          h1 { font-family: Arial, sans-serif; font-size: 22px; margin-bottom: 4px; }
          .subtitle { font-family: Arial, sans-serif; font-size: 14px; color: #555; margin-bottom: 24px; }
          pre { font-size: 13px; line-height: 1.6; }
          @media print {
            body { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <h1>${props.courseName}</h1>
        <div class="subtitle">${props.date} &middot; ${props.mode} &middot; ${props.holesCompleted} holes &middot; ${formatScore(props.scoreToPar)}</div>
        <pre>${lines.slice(2).join("\n")}</pre>
        <script>
          window.onafterprint = () => window.close();
          setTimeout(() => window.print(), 300);
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();

  void blob;
}

function encodePDFStream(_text: string): string {
  return "";
}

const shareOptions = [
  { id: "twitter", label: "X / Twitter", icon: XTwitterIcon, group: "social" },
  { id: "facebook", label: "Facebook", icon: FacebookIcon, group: "social" },
  { id: "whatsapp", label: "WhatsApp", icon: WhatsAppIcon, group: "messenger" },
  { id: "sms", label: "Messages", icon: MessageIcon, group: "messenger" },
  { id: "copy", label: "Copy Scorecard", icon: ClipboardIcon, group: "other" },
  { id: "pdf", label: "Save as PDF", icon: DocumentIcon, group: "other" },
] as const;

export default function ShareMenu(props: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleShare = (id: string) => {
    const text = buildShareText(props);
    const encoded = encodeURIComponent(text);

    switch (id) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encoded}`, "_blank");
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?quote=${encoded}`, "_blank");
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${encoded}`, "_blank");
        break;
      case "sms":
        window.open(`sms:?&body=${encoded}`, "_self");
        break;
      case "copy": {
        const full = buildScorecardText(props);
        navigator.clipboard.writeText(full);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
      case "pdf":
        generatePDF(props);
        break;
    }

    setOpen(false);
  };

  const groups = ["social", "messenger", "other"] as const;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-barlow text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
      >
        <ShareIcon className="h-4 w-4" />
        Share
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 w-52 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
          {groups.map((group, gi) => (
            <div key={group}>
              {gi > 0 && <div className="mx-3 h-px bg-neutral-100" />}
              <div className="py-1">
                {shareOptions
                  .filter((o) => o.group === group)
                  .map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleShare(option.id)}
                      className="flex w-full items-center gap-3 px-4 py-2 text-left font-barlow text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
                    >
                      <option.icon className="h-4 w-4 text-neutral-600" />
                      {option.id === "copy" && copied ? "Copied!" : option.label}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
