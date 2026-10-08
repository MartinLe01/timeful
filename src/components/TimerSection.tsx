interface TimerSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TimerSection({ isTimerFocused, onClick }: TimerSectionProps) {
  return (
    <div
      className={`w-full bg-blue-600 ${isTimerFocused ? 'flex-4' : 'flex-1'} rounded-2xl transition-all duration-700 ease-in-out md:w-2/3 md:mx-auto`}
      onClick={onClick}
    >
      Timer
    </div>
  );
}
