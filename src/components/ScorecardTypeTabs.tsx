import { useState } from "react";

const scorecardTypes = [
  "Practice",
  "Combines",
  "Courses",
  "Range",
  "Target Range",
  "Closest to Pin",
  "Speed",
];

export default function ScorecardTypeTabs() {
  const [active, setActive] = useState("Courses");

  return (
    <div className="inline-flex w-[840px] items-start gap-0 rounded-lg border border-neutral-200 bg-white p-1">
      {scorecardTypes.map((type) => (
        <button
          key={type}
          onClick={() => setActive(type)}
          className={`flex h-10 flex-1 items-center justify-center rounded-lg font-barlow text-sm font-semibold tracking-tight transition-colors ${
            active === type
              ? "bg-primary text-white"
              : "text-neutral-800 hover:text-black"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
