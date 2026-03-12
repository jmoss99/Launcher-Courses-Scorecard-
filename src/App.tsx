import Sidebar from "./components/Sidebar";
import TimeTabs from "./components/TimeTabs";
import ScorecardTypeTabs from "./components/ScorecardTypeTabs";
import CourseScorecardTable from "./components/CourseScorecardTable";
import { SyncDotIcon, CalendarIcon, ChevronDownIcon } from "./components/Icons";
import "./index.css";

export default function App() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <main className="ml-[176px] flex-1 p-6 pb-16">
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-acumin text-[40px] font-bold italic uppercase leading-none text-black">
              Scorecard
            </h1>
            <div className="flex items-center gap-2 rounded-full px-2 py-2">
              <SyncDotIcon className="h-4 w-4" />
              <span className="font-barlow text-sm font-semibold tracking-tight text-neutral-800">
                Last Sync: 4:23 PM 8/17/23
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <TimeTabs />
              <div className="flex h-10 w-60 items-center gap-3 rounded-md border border-neutral-200 bg-white px-3 shadow-xs">
                <CalendarIcon className="h-5 w-5 text-neutral-800" />
                <span className="flex-1 font-barlow text-sm font-medium tracking-tight text-neutral-900">
                  Select Date
                </span>
                <ChevronDownIcon className="h-5 w-5 text-neutral-800" />
              </div>
            </div>
            <ScorecardTypeTabs />
          </div>

          <CourseScorecardTable />
        </div>
      </main>
    </div>
  );
}
