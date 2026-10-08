interface TimerSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TimerSection({ isTimerFocused, onClick }: TimerSectionProps) {
  return (
    <div
      className={`w-full rounded-xl transition-all duration-700 ease-in-out md:w-2/3 md:mx-auto  
        ${
          isTimerFocused
            ? 'flex-5 shadow-neu-inset dark:shadow-neu-inset-dark'
            : 'flex-1 shadow-neu dark:shadow-neu-dark'
        } `}
      onClick={onClick}
    >
      Timer
    </div>
  );
}
