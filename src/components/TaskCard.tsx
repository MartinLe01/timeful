import { useState } from 'react';
import { Button } from './Button';

interface TaskItem {
  id: string;
  title: string;
  isActive: boolean;
}

interface TaskCardProps {
  task: TaskItem;
  onDelete: (id: string) => void;
  onRename: (id: string, title: string) => void;
}

export function TaskCard({ task, onDelete, onRename }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  function onConfirmEdit() {
    const trimmed = newTitle.trim();
    if (trimmed === '') return;
    onRename(task.id, trimmed);
    setIsEditing(false);
  }

  function onCancelEdit() {
    setIsEditing(false);
    setNewTitle(task.title);
  }

  return (
    <div className="w-full rounded-xl shadow-neu dark:shadow-neu-dark p-4 block">
      <div className="h-9 flex mb-4">
        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            className={`shadow-neu-inset rounded-lg min-w-0 h-full text-xl text-toxic-violet dark:text-slate-50 inline-block ${isEditing ? 'p-2 w-full' : 'w-0'}`}
          />
        ) : (
          <p
            className={`text-xl text-toxic-violet dark:text-slate-50 h-full pt-1 pl-2 ${isEditing ? 'hidden' : 'inline-block'}`}
          >
            {task.title}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        {!isEditing ? (
          <>
            <Button onClick={() => setIsEditing(true)}>
              <span className="material-symbols-outlined" aria-hidden="true">
                edit_square
              </span>
              <span className="text-lg font-semibold sr-only md:not-sr-only">
                Edit
              </span>
            </Button>
            <Button onClick={() => onDelete(task.id)} variation="danger">
              <span className="material-symbols-outlined" aria-hidden="true">
                delete
              </span>
              <span className="text-lg font-semibold sr-only md:not-sr-only">
                Delete
              </span>
            </Button>
          </>
        ) : (
          <>
            <Button onClick={onCancelEdit} variation="secondary">
              <span className="material-symbols-outlined" aria-hidden="true">
                close
              </span>
              <span className="text-lg font-semibold sr-only md:not-sr-only">
                Cancel
              </span>
            </Button>
            <Button onClick={onConfirmEdit} variation="primary">
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
              <span className="text-lg font-semibold sr-only md:not-sr-only">
                Confirm
              </span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
