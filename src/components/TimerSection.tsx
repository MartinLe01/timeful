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
          <div className=" flex justify-start h-2/3">
            <button className="bg-violet-600 flex-1 rounded-l-full">
              Pomodoro
            </button>
            <button className="bg-amber-600 flex-1 rounded-r-full">
              Break
            </button>
          </div>
        </div>
        <div className="flex-4 flex flex-col justify-start gap-8">
          <div className="bg-black h-1/2 text-slate-50 rounded-xl">Timer</div>
          <div className="bg-yellow-600 h-1/5 rounded-xl">
            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
