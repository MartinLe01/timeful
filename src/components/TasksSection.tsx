import { Button } from './Button';
import { useTasks } from '../hooks/useTasks';
import { useState } from 'react';

interface TasksSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TasksSection({ isTimerFocused, onClick }: TasksSectionProps) {
  const [taskTitle, setTaskTitle] = useState('');
  const tasks = useTasks();

  function onAddTask() {
    tasks.create(taskTitle);
    setTaskTitle('');
  }

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
        className={`shadow-neu dark:shadow-neu-dark rounded-lg transition-all duration-700 flex-col p-4 md:p-10 h-full ${isTimerFocused ? 'hidden' : 'flex'}`}
      >
        <div className="shadow-neu dark:shadow-neu-dark rounded-lg text-toxic-violet dark:text-slate-50 font-medium flex justify-between items-center gap-4 p-4">
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            className="flex-2 h-full rounded-lg shadow-neu-inset dark:shadow-neu-inset-dark p-2 text-slate-950 dark:text-slate-50"
            placeholder="Type new task title..."
          />
          <Button onClick={onAddTask}>
            <span className="material-symbols-outlined">add</span>
            <span className="sr-only md:not-sr-only text-lg">Add task</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
