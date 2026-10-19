import { useState } from 'react';
import { Button } from './Button';
import type { TaskItem } from '../types';

interface TaskCardProps {
  task: TaskItem;
  onDelete: (id: string) => void;
  onRename: (id: string, title: string) => void;
  onToggle: (id: string) => void;
}

export function TaskCard({
  task,
  onDelete,
  onRename,
  onToggle,
}: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  function handleStartEdit() {
    setNewTitle(task.title);
    setIsEditing(true);
  }

  function handleConfirmEdit() {
    const trimmed = newTitle.trim();
    if (trimmed === '') return;
    onRename(task.id, trimmed);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setNewTitle(task.title);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleConfirmEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  }

  function handleToggleActive() {
    onToggle(task.id);
  }

  return (
    <div className="w-full rounded-xl shadow-neu dark:shadow-neu-dark p-4">
      <div className="h-9 flex mb-4">
        {isEditing ? (
          <input
            autoFocus
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            className="shadow-neu-inset-low dark:shadow-neu-inset-dark-low rounded-lg min-w-0 h-full text-xl text-toxic-violet dark:text-slate-50 inline-block p-2 w-full"
          />
        ) : (
          <p className="text-xl text-toxic-violet dark:text-slate-50 h-full pt-1 pl-2">
            {task.title}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        {!isEditing ? (
          <>
            <Button onClick={handleToggleActive}>
              <span className="material-symbols-outlined" aria-hidden="true">
                {task.isActive ? 'keep_off' : 'keep'}
              </span>
              <span className="text-lg font-semibold sr-only md:not-sr-only">
                Set as Active
              </span>
            </Button>
            <Button onClick={handleStartEdit}>
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
            <Button onClick={handleCancelEdit} variation="secondary">
              <span className="material-symbols-outlined" aria-hidden="true">
                close
              </span>
              <span className="text-lg font-semibold sr-only md:not-sr-only">
                Cancel
              </span>
            </Button>
            <Button onClick={handleConfirmEdit} variation="primary">
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
