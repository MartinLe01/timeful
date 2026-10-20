interface TimerDisplayProps {
  duration: number;
  isTimerFocused?: boolean;
}

export function TimerDisplay({ duration, isTimerFocused }: TimerDisplayProps) {
  const minutes: number = Math.floor(duration / 60);
  const second: number = duration % 60;

  return (
    <div
      className={`h-4/5 w-full text-slate-50 rounded-xl shadow-neu-hard dark:shadow-neu-dark-hard p-2 m-auto min-h-24 md:min-h-40 ${isTimerFocused ? 'hidden' : 'inline-block'}`}
    >
      <div className="bg-neutral-950 h-full rounded-lg shadow-display dark:shadow-display-dark text-5xl md:text-7xl flex justify-center items-center font-segment">
        <div>
          {`${String(minutes).padStart(2, '0')}:${String(second).padStart(2, '0')}`}
        </div>
      </div>
    </div>
  );
}
