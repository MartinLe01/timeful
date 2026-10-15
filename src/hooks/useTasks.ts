import { useReducer, useEffect } from 'react';

const STORAGE_KEY = 'tasks';

interface TaskItem {
  id: string;
  title: string;
  isActive: boolean;
}

interface Tasks {
  items: TaskItem[];
}

type TasksActions =
  | { type: 'create'; title: string }
  | { type: 'delete'; id: string }
  | { type: 'toggleActive'; id: string }
  | { type: 'rename'; id: string; title: string };

function tasksReducer(state: Tasks, action: TasksActions): Tasks {
  switch (action.type) {
    case 'create':
      return {
        items: [
          ...state.items,
          {
            id: self.crypto.randomUUID(),
            title: action.title,
            isActive: false,
          },
        ],
      };

    case 'delete':
      return { items: state.items.filter((item) => item.id !== action.id) };

    case 'toggleActive':
      return {
        items: state.items.map((item) => ({
          ...item,
          isActive: item.id === action.id ? !item.isActive : false,
        })),
      };

    case 'rename':
      return {
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, title: action.title } : item,
        ),
      };

    default:
      return state;
  }
}

function isTaskItem(value: unknown): value is TaskItem {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id === 'string' &&
    'title' in value &&
    typeof value.title === 'string' &&
    'isActive' in value &&
    typeof value.isActive === 'boolean'
  );
}

function loadTasks(): Tasks {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return { items: [] };

    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every(isTaskItem)) {
      return { items: parsed };
    }
    return { items: [] };
  } catch {
    return { items: [] };
  }
}

export function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, null, loadTasks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.items));
  }, [tasks]);

  return {
    // get tasks sorted based on isActive, true first
    sortedTasks: [...tasks.items].sort(
      (a, b) => Number(b.isActive) - Number(a.isActive),
    ),
    totalTasks: tasks.items.length,
    create: (title: string) => dispatch({ type: 'create', title }),
    delete: (id: string) => dispatch({ type: 'delete', id }),
    toggleActive: (id: string) => dispatch({ type: 'toggleActive', id }),
    rename: (id: string, title: string) =>
      dispatch({ type: 'rename', id, title }),
  };
}
