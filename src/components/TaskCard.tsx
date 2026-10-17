import { useState } from 'react';
import { Button } from './Button';
import { useTasks } from '../hooks/useTasks';

export function TaskCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('Task');
  //const tasks = useTasks();

  return (
    <div className="w-full rounded-xl shadow-neu dark:shadow-neu-dark p-4">
      <div className="h-9 flex mb-4">
        <p
          className={`text-xl text-toxic-violet dark:text-slate-50 h-full pt-1 pl-2 ${isEditing ? 'hidden' : 'inline-block'}`}
        >
          {newTitle}
        </p>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          className={`shadow-neu-inset rounded-lg min-w-0 h-full text-xl text-toxic-violet dark:text-slate-50 inline-block ${isEditing ? 'p-2 w-full' : 'w-0'}`}
        />
      </div>

      <div className="flex justify-end gap-2">
        {!isEditing ? (
          <>
            <Button onClick={() => setIsEditing(!isEditing)}>
              <span className="material-symbols-outlined">edit_square</span>
            </Button>
            <Button onClick={() => {}} variation="danger">
              <span className="material-symbols-outlined">delete</span>
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variation="secondary"
            >
              <span className="material-symbols-outlined">close</span>
            </Button>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variation="primary"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
