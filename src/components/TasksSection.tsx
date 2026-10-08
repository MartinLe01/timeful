interface TasksSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TasksSection({ isTimerFocused, onClick }: TasksSectionProps) {
  return (
    <div
      className={`w-full rounded-xl transition-all duration-700 ease-in-out md:w-2/3 md:mx-auto  
        ${
          isTimerFocused
            ? 'flex-1 shadow-neu dark:shadow-neu-dark'
            : 'flex-5 shadow-neu-inset dark:shadow-neu-inset-dark'
        } `}
      onClick={onClick}
    >
      Tasks
    </div>
  );
}
