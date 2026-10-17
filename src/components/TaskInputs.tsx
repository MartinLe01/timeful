import { Button } from './Button';
import { useState } from 'react';

interface TaskInputsProps {
  create: (title: string) => void;
}

export function TaskInputs({ create }: TaskInputsProps) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleAddTask() {
    create(taskTitle);
    setTaskTitle('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <div className="shadow-neu dark:shadow-neu-dark rounded-lg text-toxic-violet dark:text-slate-50 font-medium flex justify-between items-center gap-4 p-4">
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        type="text"
        className="h-full flex-1 min-w-0 rounded-lg shadow-neu-inset dark:shadow-neu-inset-dark p-2 text-slate-950 dark:text-slate-50"
        placeholder="Type new task title..."
      />
      <Button onClick={handleAddTask}>
        <span className="material-symbols-outlined">add</span>
        <span className="sr-only md:not-sr-only text-lg">Add task</span>
      </Button>
    </div>
  );
}
