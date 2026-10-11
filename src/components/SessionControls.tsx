type ModeType = 'pomodoro' | 'break';

interface SessionControlsProps {
  mode: ModeType;
  onModeSwitch: (to: ModeType) => void;
}

export function SessionControls({ mode, onModeSwitch }: SessionControlsProps) {
  return (
    <div className="flex-1">
      <div className="flex justify-start h-2/3 p-2 shadow-neu-hard dark:shadow-neu-dark-hard rounded-xl">
        <label className="relative flex-1">
          <input
            type="radio"
            checked={mode === 'pomodoro'}
            onChange={() => onModeSwitch('pomodoro')}
            className="peer"
            name="mode"
          />
          <span
            className={`absolute rounded-l-lg inset-0 flex justify-center items-center text-lg font-semibold bg-light-violet dark:bg-toxic-violet transition:all duration-400 cursor-pointer ${mode === 'pomodoro' ? 'shadow-neu-inset-light dark:shadow-neu-inset-violet' : 'shadow-light hover:shadow-light-hover dark:shadow-retro dark:hover:shadow-retro-hover'}`}
          >
            Pomodoro
          </span>
        </label>
        <label className="relative flex-1">
          <input
            type="radio"
            checked={mode === 'break'}
            onChange={() => onModeSwitch('break')}
            className="peer"
            name="mode"
          />
          <span
            className={`absolute rounded-r-lg inset-0 flex justify-center items-center text-lg font-semibold bg-light-violet dark:bg-toxic-violet transition:all duration-400 cursor-pointer ${mode === 'break' ? 'shadow-neu-inset-light dark:shadow-neu-inset-violet' : 'shadow-light hover:shadow-light-hover dark:shadow-retro dark:hover:shadow-retro-hover'}`}
          >
            Break
          </span>
        </label>
      </div>
    </div>
  );
}
