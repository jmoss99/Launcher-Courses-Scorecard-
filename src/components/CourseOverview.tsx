export interface HoleScore {
  hole: number;
  par: number;
  score: number;
}

export interface CourseOverviewData {
  courseName: string;
  front9: HoleScore[];
  back9: HoleScore[];
}

function ScoreMarker({ score, par }: { score: number; par: number }) {
  const diff = score - par;

  if (diff <= -2) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-black">
          <span className="inline-flex h-[19px] w-[19px] items-center justify-center rounded-full border-[1.5px] border-black font-acumin text-base font-bold italic leading-none text-black">
            {score}
          </span>
        </span>
      </span>
    );
  }

  if (diff === -1) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-black font-acumin text-base font-bold italic leading-none text-black">
          {score}
        </span>
      </span>
    );
  }

  if (diff === 0) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center font-acumin text-base font-bold italic leading-none text-black">
        {score}
      </span>
    );
  }

  if (diff === 1) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center border-[1.5px] border-black font-acumin text-base font-bold italic leading-none text-black">
          {score}
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center">
      <span className="inline-flex h-8 w-8 items-center justify-center border-[1.5px] border-black">
        <span className="inline-flex h-[22px] w-[22px] items-center justify-center border-[1.5px] border-black font-acumin text-base font-bold italic leading-none text-black">
          {score}
        </span>
      </span>
    </span>
  );
}

function ScoreMarkerLg({ score, par }: { score: number; par: number }) {
  const diff = score - par;

  if (diff <= -2) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-black">
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full border-[1.5px] border-black font-acumin text-lg font-bold italic leading-none text-black">
            {score}
          </span>
        </span>
      </span>
    );
  }

  if (diff === -1) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-black font-acumin text-lg font-bold italic leading-none text-black">
          {score}
        </span>
      </span>
    );
  }

  if (diff === 0) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center font-acumin text-lg font-bold italic leading-none text-black">
        {score}
      </span>
    );
  }

  if (diff === 1) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-8 w-8 items-center justify-center border-[1.5px] border-black font-acumin text-lg font-bold italic leading-none text-black">
          {score}
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center">
      <span className="inline-flex h-9 w-9 items-center justify-center border-[1.5px] border-black">
        <span className="inline-flex h-[26px] w-[26px] items-center justify-center border-[1.5px] border-black font-acumin text-lg font-bold italic leading-none text-black">
          {score}
        </span>
      </span>
    </span>
  );
}

function sumScores(holes: HoleScore[]): number {
  return holes.reduce((sum, h) => sum + h.score, 0);
}

function sumPar(holes: HoleScore[]): number {
  return holes.reduce((sum, h) => sum + h.par, 0);
}

const thBase = "border-b border-r border-neutral-200 px-1.5 py-1.5 text-center font-barlow text-[11px] font-semibold text-neutral-800";
const tdBase = "border-r border-neutral-200 px-1.5 py-1.5 text-center font-barlow text-xs font-medium text-neutral-800";
const tdScoreBase = "border-r border-t border-neutral-200 px-1 py-1.5 text-center";
const subtotalTh = "border-b border-r border-neutral-200 bg-neutral-100 px-1.5 py-1.5 text-center font-barlow text-[11px] font-semibold uppercase tracking-wider text-neutral-800";
const subtotalTd = "border-r border-neutral-200 bg-neutral-50 px-1.5 py-1.5 text-center font-barlow text-xs font-semibold text-neutral-800";
const subtotalScore = "border-r border-t border-neutral-200 bg-neutral-50 px-1.5 py-1.5 text-center font-acumin text-base font-bold italic text-black";

export function FullScorecard({ front9, back9 }: { front9: HoleScore[]; back9: HoleScore[] }) {
  const outTotal = sumScores(front9);
  const inTotal = sumScores(back9);
  const outPar = sumPar(front9);
  const inPar = sumPar(back9);
  const grandTotal = outTotal + inTotal;
  const grandPar = outPar + inPar;

  return (
    <div className="w-full overflow-hidden rounded-lg border border-neutral-200">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-neutral-50">
            <th className="w-[52px] border-b border-r border-neutral-200 px-2 py-1.5 text-left font-barlow text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
              Hole
            </th>
            {front9.map((h) => (
              <th key={h.hole} className={thBase}>{h.hole}</th>
            ))}
            <th className={subtotalTh}>OUT</th>
            {back9.map((h) => (
              <th key={h.hole} className={thBase}>{h.hole}</th>
            ))}
            <th className={subtotalTh}>IN</th>
            <th className="border-b border-neutral-200 bg-neutral-200/60 px-1.5 py-1.5 text-center font-barlow text-[11px] font-semibold uppercase tracking-wider text-neutral-900">
              TOT
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r border-neutral-200 px-2 py-1.5 font-barlow text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
              Par
            </td>
            {front9.map((h) => (
              <td key={h.hole} className={tdBase}>{h.par}</td>
            ))}
            <td className={subtotalTd}>{outPar}</td>
            {back9.map((h) => (
              <td key={h.hole} className={tdBase}>{h.par}</td>
            ))}
            <td className={subtotalTd}>{inPar}</td>
            <td className="border-neutral-200 bg-neutral-100 px-1.5 py-1.5 text-center font-barlow text-xs font-semibold text-neutral-900">
              {grandPar}
            </td>
          </tr>
          <tr>
            <td className="border-r border-t border-neutral-200 px-2 py-1.5 font-barlow text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
              Score
            </td>
            {front9.map((h) => (
              <td key={h.hole} className={tdScoreBase}>
                <ScoreMarker score={h.score} par={h.par} />
              </td>
            ))}
            <td className={subtotalScore}>{outTotal}</td>
            {back9.map((h) => (
              <td key={h.hole} className={tdScoreBase}>
                <ScoreMarker score={h.score} par={h.par} />
              </td>
            ))}
            <td className={subtotalScore}>{inTotal}</td>
            <td className="border-t border-neutral-200 bg-neutral-100 px-1.5 py-1.5 text-center font-acumin text-base font-bold italic text-black">
              {grandTotal}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function HalfScorecard({ holes, label }: { holes: HoleScore[]; label: "OUT" | "IN" }) {
  const total = sumScores(holes);
  const par = sumPar(holes);

  return (
    <div className="w-full overflow-hidden rounded-lg border border-neutral-200">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-neutral-50">
            <th className="w-[72px] border-b border-r border-neutral-200 px-3 py-2 text-left font-barlow text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Hole
            </th>
            {holes.map((h) => (
              <th
                key={h.hole}
                className="border-b border-r border-neutral-200 px-2 py-2 text-center font-barlow text-xs font-semibold text-neutral-800 last:border-r-0"
              >
                {h.hole}
              </th>
            ))}
            <th className="w-[56px] border-b border-l border-neutral-200 bg-neutral-100 px-2 py-2 text-center font-barlow text-xs font-semibold uppercase tracking-wider text-neutral-800">
              {label}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r border-neutral-200 px-3 py-2 font-barlow text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Par
            </td>
            {holes.map((h) => (
              <td
                key={h.hole}
                className="border-r border-neutral-200 px-2 py-2 text-center font-barlow text-sm font-medium text-neutral-800 last:border-r-0"
              >
                {h.par}
              </td>
            ))}
            <td className="border-l border-neutral-200 bg-neutral-50 px-2 py-2 text-center font-barlow text-sm font-semibold text-neutral-800">
              {par}
            </td>
          </tr>
          <tr>
            <td className="border-r border-t border-neutral-200 px-3 py-2 font-barlow text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Score
            </td>
            {holes.map((h) => (
              <td
                key={h.hole}
                className="border-r border-t border-neutral-200 px-1 py-1.5 text-center last:border-r-0"
              >
                <ScoreMarkerLg score={h.score} par={h.par} />
              </td>
            ))}
            <td className="border-l border-t border-neutral-200 bg-neutral-50 px-2 py-2 text-center font-acumin text-lg font-bold italic text-black">
              {total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
