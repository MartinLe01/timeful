interface TimerSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TimerSection({ isTimerFocused, onClick }: TimerSectionProps) {
  return (
    <div
      className={`w-full bg-blue-600 ${isTimerFocused ? 'max-h-11/12' : 'max-h-20'} flex-1`}
      onClick={onClick}
    >
      Timer
    </div>
  );
}
