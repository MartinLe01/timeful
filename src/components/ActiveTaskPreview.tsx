import type { TaskItem } from '../types';

interface ActiveTaskPreviewProps {
  task: TaskItem;
}

export function ActiveTaskPreview({ task }: ActiveTaskPreviewProps) {
  return (
    <div
      className={`w-full rounded-xl shadow-neu dark:shadow-neu-dark p-4 ${task.isActive ? 'inset-ring-4 inset-ring-light-violet' : ''}`}
    >
      <p className="text-toxic-violet dark:text-slate-50 h-full pt-1 pl-2">
        <span className="font-extrabold text-xl">Pinned task: </span>
        <span className="text-4xl block truncate">{task.title}</span>
      </p>
    </div>
  );
}
