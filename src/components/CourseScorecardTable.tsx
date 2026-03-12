import { useState } from "react";
import { HalfScorecard, FullScorecard } from "./CourseOverview";
import type { CourseOverviewData } from "./CourseOverview";

interface CourseScorecard {
  id: number;
  date: string;
  courseName: string;
  mode: string;
  holesCompleted: number;
  scoreToPar: number;
  overview: CourseOverviewData;
}

const scorecards: CourseScorecard[] = [
  {
    id: 1,
    date: "8/30/23",
    courseName: "Olympic Club GC",
    mode: "Stroke",
    holesCompleted: 9,
    scoreToPar: -1,
    overview: {
      courseName: "Olympic Club GC",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 5 },
        { hole: 3, par: 4, score: 5 },
        { hole: 4, par: 4, score: 4 },
        { hole: 5, par: 3, score: 2 },
        { hole: 6, par: 5, score: 5 },
        { hole: 7, par: 4, score: 4 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 4, score: 3 },
      ],
      back9: [],
    },
  },
  {
    id: 2,
    date: "8/30/23",
    courseName: "Mariners Point GC",
    mode: "Stroke",
    holesCompleted: 6,
    scoreToPar: 3,
    overview: {
      courseName: "Mariners Point GC",
      front9: [
        { hole: 1, par: 3, score: 4 },
        { hole: 2, par: 4, score: 5 },
        { hole: 3, par: 3, score: 4 },
        { hole: 4, par: 4, score: 4 },
        { hole: 5, par: 4, score: 5 },
        { hole: 6, par: 3, score: 4 },
      ],
      back9: [],
    },
  },
  {
    id: 3,
    date: "8/30/23",
    courseName: "Claremont Country Club Lor...",
    mode: "Best Ball",
    holesCompleted: 18,
    scoreToPar: 2,
    overview: {
      courseName: "Claremont Country Club",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 5 },
        { hole: 3, par: 3, score: 3 },
        { hole: 4, par: 5, score: 5 },
        { hole: 5, par: 4, score: 4 },
        { hole: 6, par: 4, score: 5 },
        { hole: 7, par: 3, score: 3 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 5, score: 5 },
      ],
      back9: [
        { hole: 10, par: 4, score: 4 },
        { hole: 11, par: 4, score: 4 },
        { hole: 12, par: 3, score: 4 },
        { hole: 13, par: 4, score: 4 },
        { hole: 14, par: 5, score: 5 },
        { hole: 15, par: 4, score: 4 },
        { hole: 16, par: 4, score: 5 },
        { hole: 17, par: 3, score: 3 },
        { hole: 18, par: 5, score: 5 },
      ],
    },
  },
  {
    id: 4,
    date: "8/30/23",
    courseName: "Tilden Park GC",
    mode: "Scramble",
    holesCompleted: 9,
    scoreToPar: -2,
    overview: {
      courseName: "Tilden Park GC",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 3 },
        { hole: 3, par: 3, score: 3 },
        { hole: 4, par: 5, score: 4 },
        { hole: 5, par: 4, score: 4 },
        { hole: 6, par: 4, score: 4 },
        { hole: 7, par: 3, score: 3 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 5, score: 5 },
      ],
      back9: [],
    },
  },
  {
    id: 5,
    date: "8/30/23",
    courseName: "Olympic Club GC",
    mode: "Scramble",
    holesCompleted: 9,
    scoreToPar: 1,
    overview: {
      courseName: "Olympic Club GC",
      front9: [
        { hole: 1, par: 4, score: 5 },
        { hole: 2, par: 4, score: 4 },
        { hole: 3, par: 4, score: 4 },
        { hole: 4, par: 4, score: 4 },
        { hole: 5, par: 3, score: 3 },
        { hole: 6, par: 5, score: 5 },
        { hole: 7, par: 4, score: 4 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 4, score: 4 },
      ],
      back9: [],
    },
  },
  {
    id: 6,
    date: "8/30/23",
    courseName: "Olympic Club GC",
    mode: "Scramble",
    holesCompleted: 18,
    scoreToPar: -2,
    overview: {
      courseName: "Olympic Club GC",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 4 },
        { hole: 3, par: 4, score: 3 },
        { hole: 4, par: 4, score: 4 },
        { hole: 5, par: 3, score: 3 },
        { hole: 6, par: 5, score: 4 },
        { hole: 7, par: 4, score: 4 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 4, score: 4 },
      ],
      back9: [
        { hole: 10, par: 4, score: 4 },
        { hole: 11, par: 4, score: 4 },
        { hole: 12, par: 3, score: 3 },
        { hole: 13, par: 4, score: 4 },
        { hole: 14, par: 5, score: 5 },
        { hole: 15, par: 4, score: 4 },
        { hole: 16, par: 4, score: 4 },
        { hole: 17, par: 3, score: 3 },
        { hole: 18, par: 5, score: 5 },
      ],
    },
  },
  {
    id: 7,
    date: "8/30/23",
    courseName: "Tilden Park GC",
    mode: "Scramble",
    holesCompleted: 12,
    scoreToPar: 2,
    overview: {
      courseName: "Tilden Park GC",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 5 },
        { hole: 3, par: 3, score: 3 },
        { hole: 4, par: 5, score: 5 },
        { hole: 5, par: 4, score: 5 },
        { hole: 6, par: 4, score: 4 },
        { hole: 7, par: 3, score: 3 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 5, score: 5 },
      ],
      back9: [
        { hole: 10, par: 4, score: 4 },
        { hole: 11, par: 4, score: 5 },
        { hole: 12, par: 3, score: 4 },
      ],
    },
  },
  {
    id: 8,
    date: "8/30/23",
    courseName: "Olympic Club GC",
    mode: "Scramble",
    holesCompleted: 6,
    scoreToPar: 2,
    overview: {
      courseName: "Olympic Club GC",
      front9: [
        { hole: 1, par: 4, score: 5 },
        { hole: 2, par: 4, score: 4 },
        { hole: 3, par: 4, score: 5 },
        { hole: 4, par: 4, score: 4 },
        { hole: 5, par: 3, score: 3 },
        { hole: 6, par: 5, score: 5 },
      ],
      back9: [],
    },
  },
  {
    id: 9,
    date: "8/30/23",
    courseName: "Claremont Country Club Lor...",
    mode: "Scramble",
    holesCompleted: 18,
    scoreToPar: 1,
    overview: {
      courseName: "Claremont Country Club",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 5 },
        { hole: 3, par: 3, score: 3 },
        { hole: 4, par: 5, score: 5 },
        { hole: 5, par: 4, score: 4 },
        { hole: 6, par: 4, score: 5 },
        { hole: 7, par: 3, score: 3 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 5, score: 5 },
      ],
      back9: [
        { hole: 10, par: 4, score: 4 },
        { hole: 11, par: 4, score: 4 },
        { hole: 12, par: 3, score: 3 },
        { hole: 13, par: 4, score: 5 },
        { hole: 14, par: 5, score: 5 },
        { hole: 15, par: 4, score: 4 },
        { hole: 16, par: 4, score: 4 },
        { hole: 17, par: 3, score: 3 },
        { hole: 18, par: 5, score: 5 },
      ],
    },
  },
  {
    id: 10,
    date: "8/30/23",
    courseName: "Olympic Club GC",
    mode: "Stroke",
    holesCompleted: 18,
    scoreToPar: 3,
    overview: {
      courseName: "Olympic Club GC",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 5 },
        { hole: 3, par: 4, score: 5 },
        { hole: 4, par: 4, score: 4 },
        { hole: 5, par: 3, score: 2 },
        { hole: 6, par: 5, score: 5 },
        { hole: 7, par: 4, score: 4 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 4, score: 3 },
      ],
      back9: [
        { hole: 10, par: 4, score: 4 },
        { hole: 11, par: 4, score: 4 },
        { hole: 12, par: 3, score: 5 },
        { hole: 13, par: 4, score: 4 },
        { hole: 14, par: 5, score: 5 },
        { hole: 15, par: 4, score: 4 },
        { hole: 16, par: 4, score: 4 },
        { hole: 17, par: 3, score: 4 },
        { hole: 18, par: 5, score: 5 },
      ],
    },
  },
  {
    id: 11,
    date: "8/30/23",
    courseName: "Tilden Park GC",
    mode: "Best Ball",
    holesCompleted: 9,
    scoreToPar: -1,
    overview: {
      courseName: "Tilden Park GC",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 3 },
        { hole: 3, par: 3, score: 3 },
        { hole: 4, par: 5, score: 5 },
        { hole: 5, par: 4, score: 4 },
        { hole: 6, par: 4, score: 4 },
        { hole: 7, par: 3, score: 3 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 5, score: 5 },
      ],
      back9: [],
    },
  },
  {
    id: 12,
    date: "8/30/23",
    courseName: "Tilden Park GC",
    mode: "Scramble",
    holesCompleted: 9,
    scoreToPar: -1,
    overview: {
      courseName: "Tilden Park GC",
      front9: [
        { hole: 1, par: 4, score: 3 },
        { hole: 2, par: 4, score: 4 },
        { hole: 3, par: 3, score: 3 },
        { hole: 4, par: 5, score: 5 },
        { hole: 5, par: 4, score: 4 },
        { hole: 6, par: 4, score: 4 },
        { hole: 7, par: 3, score: 3 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 5, score: 5 },
      ],
      back9: [],
    },
  },
  {
    id: 13,
    date: "8/30/23",
    courseName: "Tilden Park GC",
    mode: "Scramble",
    holesCompleted: 9,
    scoreToPar: -1,
    overview: {
      courseName: "Tilden Park GC",
      front9: [
        { hole: 1, par: 4, score: 4 },
        { hole: 2, par: 4, score: 4 },
        { hole: 3, par: 3, score: 2 },
        { hole: 4, par: 5, score: 5 },
        { hole: 5, par: 4, score: 4 },
        { hole: 6, par: 4, score: 4 },
        { hole: 7, par: 3, score: 3 },
        { hole: 8, par: 4, score: 4 },
        { hole: 9, par: 5, score: 5 },
      ],
      back9: [],
    },
  },
];

function formatScoreToPar(score: number): string {
  if (score === 0) return "E";
  if (score > 0) return `+${score}`;
  return `${score}`;
}

function scoreToParColor(score: number): string {
  if (score < 0) return "text-primary";
  if (score === 0) return "text-success";
  return "text-black";
}

export default function CourseScorecardTable() {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());

  const toggleChecked = (id: number) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-5">
      {scorecards.map((scorecard) => (
        <div
          key={scorecard.id}
          className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="flex items-center gap-4 border-b border-neutral-200 px-5 py-4">
            <button
              onClick={() => toggleChecked(scorecard.id)}
              className="shrink-0"
            >
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border-[1.5px] ${
                  checkedIds.has(scorecard.id)
                    ? "border-primary bg-primary"
                    : "border-neutral-800 bg-white"
                }`}
              >
                {checkedIds.has(scorecard.id) && (
                  <svg className="h-3 w-3 text-white" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2.5 7 5.5 10.5 11.5 3.5" />
                  </svg>
                )}
              </div>
            </button>

            <div className="flex min-w-0 flex-1 items-center gap-3">
              <span className="font-barlow text-base font-semibold text-black">
                {scorecard.overview.courseName}
              </span>
              <span className="font-barlow text-sm text-neutral-800">
                {scorecard.date}
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <span className="font-barlow text-xs font-semibold uppercase tracking-wider text-neutral-800">
                  Format
                </span>
                <span className="font-barlow text-sm font-medium text-black">
                  {scorecard.mode}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-barlow text-xs font-semibold uppercase tracking-wider text-neutral-800">
                  Holes
                </span>
                <span className="font-acumin text-xl font-bold italic text-black">
                  {scorecard.holesCompleted}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-barlow text-xs font-semibold uppercase tracking-wider text-neutral-800">
                  Score
                </span>
                <span className={`font-acumin text-xl font-bold italic ${scoreToParColor(scorecard.scoreToPar)}`}>
                  {formatScoreToPar(scorecard.scoreToPar)}
                </span>
              </div>

              <span className="font-barlow text-sm font-semibold text-primary underline">
                View Shots
              </span>
            </div>
          </div>

          <div className="p-5">
            {scorecard.overview.back9.length === 9 ? (
              <FullScorecard front9={scorecard.overview.front9} back9={scorecard.overview.back9} />
            ) : (
              <div className="flex flex-col gap-3">
                <HalfScorecard holes={scorecard.overview.front9} label="OUT" />
                {scorecard.overview.back9.length > 0 && (
                  <HalfScorecard holes={scorecard.overview.back9} label="IN" />
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
