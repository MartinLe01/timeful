import { useTasks } from '../hooks/useTasks';
import { TaskInputs } from './TaskInputs';
import { TaskCard } from './TaskCard';

interface TasksSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TasksSection({ isTimerFocused, onClick }: TasksSectionProps) {
  const tasks = useTasks();

  return (
    <div
      className={`w-full rounded-2xl transition-all duration-500 ease-in-out md:w-2/3 md:mx-auto p-8
        ${
          isTimerFocused
            ? 'grow basis-0 shadow-neu dark:shadow-neu-dark hover:shadow-neu-low hover:dark:shadow-neu-dark-low'
            : 'grow-3 basis-0 shadow-neu-inset dark:shadow-neu-inset-dark'
        } `}
      onClick={isTimerFocused ? onClick : () => {}}
    >
      <div
        className={`shadow-neu dark:shadow-neu-dark rounded-lg transition-all duration-700 flex-col p-4 md:p-10 h-full gap-8 ${isTimerFocused ? 'hidden' : 'flex'}`}
      >
        <TaskInputs create={tasks.create} />

        <div className="flex gap-4">
          <TaskCard />
        </div>
      </div>
    </div>
  );
}
