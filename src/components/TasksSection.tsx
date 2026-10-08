interface TasksSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TasksSection({ isTimerFocused, onClick }: TasksSectionProps) {
  return (
    <div
      className={`w-full bg-green-600 ${isTimerFocused ? 'flex-1' : 'flex-4'} transition-all duration-700 ease-in-out md:w-2/3 md:mx-auto`}
      onClick={onClick}
    >
      Tasks
    </div>
  );
}
