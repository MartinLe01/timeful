interface TasksSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TasksSection({ isTimerFocused, onClick }: TasksSectionProps) {
  return (
    <div
      className={`w-full bg-green-600 ${isTimerFocused ? 'max-h-20' : 'max-h-11/12'} flex-1`}
      onClick={onClick}
    >
      Tasks
    </div>
  );
}
