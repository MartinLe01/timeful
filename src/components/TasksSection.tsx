import { Button } from './Button';

interface TasksSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TasksSection({ isTimerFocused, onClick }: TasksSectionProps) {
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
        <div className="shadow-neu dark:shadow-neu-dark rounded-lg text-toxic-violet dark:text-slate-50 font-medium flex justify-between p-4">
          <div>Radio inputs</div>
          <Button onClick={() => {}}>
            <span className="material-symbols-outlined">add</span>
            <span className="sr-only md:not-sr-only text-lg">Add task</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
