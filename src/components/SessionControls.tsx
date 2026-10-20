import type { ModeType } from '../types';

interface SessionControlsProps {
  mode: ModeType;
  onModeSwitch: (to: ModeType) => void;
  radioLabel1: string;
  radioLabel2: string;
}

export function SessionControls({
  mode,
  onModeSwitch,
  radioLabel1,
  radioLabel2,
}: SessionControlsProps) {
  return (
    <div className="flex p-2 gap-2 shadow-neu-hard dark:shadow-neu-dark-hard rounded-xl h-full">
      <label className="relative flex-1">
        <input
          type="radio"
          checked={mode === 'pomodoro'}
          onChange={() => onModeSwitch('pomodoro')}
          className="sr-only"
          name="mode"
        />
        <span
          className={`absolute rounded-lg inset-0 flex justify-center items-center text-lg font-semibold transition:all duration-400 cursor-pointer ${mode === 'pomodoro' ? 'shadow-neu-inset-light dark:shadow-neu-inset-violet bg-light-violet dark:bg-toxic-violet text-slate-50' : 'hover:shadow-neu-inset-low dark:hover:shadow-neu-inset-dark-low text-toxic-violet dark:text-slate-50'}`}
        >
          {radioLabel1}
        </span>
      </label>
      <label className="relative flex-1">
        <input
          type="radio"
          checked={mode === 'break'}
          onChange={() => onModeSwitch('break')}
          className="sr-only"
          name="mode"
        />
        <span
          className={`absolute rounded-lg inset-0 flex justify-center items-center text-lg font-semibold transition:all duration-400 cursor-pointer ${mode === 'break' ? 'shadow-neu-inset-light dark:shadow-neu-inset-violet bg-light-violet dark:bg-toxic-violet text-slate-50' : 'hover:shadow-neu-inset-low dark:hover:shadow-neu-inset-dark-low text-toxic-violet dark:text-slate-50'}`}
        >
          {radioLabel2}
        </span>
      </label>
    </div>
  );
}
