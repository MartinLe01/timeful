interface TimerProps {
  duration: number;
}

export function Timer({ duration }: TimerProps) {
  const minutes: number = Math.floor(duration / 60);
  const second: number = duration % 60;

  return (
    <div className=" h-1/2 text-slate-50 rounded-xl shadow-neu-hard dark:shadow-neu-dark-hard p-2">
      <div className="bg-neutral-950 h-full rounded-lg shadow-display dark:shadow-display-dark text-5xl flex justify-center items-center font-segment">
        <div>
          {`${String(minutes).padStart(2, '0')}:${String(second).padStart(2, '0')}`}
        </div>
      </div>
    </div>
  );
}
