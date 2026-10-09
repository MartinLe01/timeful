interface TimerSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TimerSection({ isTimerFocused, onClick }: TimerSectionProps) {
  return (
    <div
      className={`w-full rounded-2xl transition-all duration-700 ease-in-out md:w-2/3 md:mx-auto p-8 flex
        ${
          isTimerFocused
            ? 'grow-3 basis-0 shadow-neu-inset dark:shadow-neu-inset-dark'
            : 'grow basis-0 shadow-neu dark:shadow-neu-dark hover:shadow-neu-low hover:dark:shadow-neu-dark-low'
        } `}
      onClick={onClick}
    >
      <div
        className={`shadow-neu dark:shadow-neu-dark rounded-xl flex-1 flex-col p-10 ${isTimerFocused ? 'flex' : 'hidden'}`}
      >
        <div className="flex-1">
          <div className=" flex justify-start h-2/3 p-2 shadow-neu-hard dark:shadow-neu-dark-hard rounded-xl">
            <button className="bg-toxic-violet flex-1 rounded-l-lg shadow-retro hover:shadow-retro-hover transition:all duration-400 cursor-pointer">
              Pomodoro
            </button>
            <button className="bg-toxic-violet flex-1 rounded-r-lg shadow-retro hover:shadow-retro-hover transition:all duration-400 cursor-pointer">
              Break
            </button>
          </div>
        </div>
        <div className="flex-4 flex flex-col justify-start gap-8">
          <div className=" h-1/2 text-slate-50 rounded-xl shadow-neu-hard dark:shadow-neu-dark-hard p-2">
            <div className="bg-neutral-950 h-full rounded-lg shadow-display dark:shadow-display-dark"></div>
          </div>
          <div className="h-1/5 rounded-xl dark:shadow-neu-dark-hard shadow-neu-hard p-2">
            <button className="bg-toxic-violet h-full w-full rounded-lg shadow-retro hover:shadow-retro-hover transition:all duration-400 cursor-pointer">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
