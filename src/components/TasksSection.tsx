interface TasksSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TasksSection({ isTimerFocused, onClick }: TasksSectionProps) {
  return (
    <div
      className={`w-full rounded-2xl transition-all duration-700 ease-in-out md:w-2/3 md:mx-auto p-8
        ${
          isTimerFocused
            ? 'grow basis-0 shadow-neu dark:shadow-neu-dark hover:shadow-neu-low hover:dark:shadow-neu-dark-low'
            : 'grow-3 basis-0 shadow-neu-inset dark:shadow-neu-inset-dark'
        } `}
      onClick={onClick}
    ></div>
  );
}
