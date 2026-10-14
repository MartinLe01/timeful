import { useReducer } from 'react';

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

    case 'toggleActive': {
      const activeItem = state.items.find((item) => item.isActive === true);

      if (!activeItem) {
        return {
          items: state.items.map((item) =>
            item.id === action.id ? { ...item, isActive: true } : item,
          ),
        };
      } else {
        return {
          items: state.items
            .map((item) => {
              return { ...item, isActive: false };
            })
            .map((item) =>
              item.id === action.id
                ? { ...item, isActive: !item.isActive }
                : item,
            ),
        };
      }
    }

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

export function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, { items: [] });

  return {
    // get tasks sorted based on isActive, true first
    getSortedTasks: tasks.items.sort(
      (a, b) => Number(b.isActive) - Number(a.isActive),
    ),
    getTotalTasks: tasks.items.length,
    create: (title: string) => dispatch({ type: 'create', title }),
    delete: (id: string) => dispatch({ type: 'delete', id }),
    toggleActive: (id: string) => dispatch({ type: 'toggleActive', id }),
    rename: (id: string, title: string) =>
      dispatch({ type: 'rename', id, title }),
  };
}
