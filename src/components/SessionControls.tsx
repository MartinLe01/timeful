type ModeType = 'pomodoro' | 'break';

interface SessionControlsProps {
  mode: ModeType;
  onModeSwitch: (to: ModeType) => void;
}

export function SessionControls({ mode, onModeSwitch }: SessionControlsProps) {
  return (
    <div className="flex-1">
      <div className="flex justify-start h-2/3 p-2 shadow-neu-hard dark:shadow-neu-dark-hard rounded-xl">
        <label className="relative flex-1 flex justify-center items-center">
          <input
            type="radio"
            checked={mode === 'pomodoro'}
            onChange={() => onModeSwitch('pomodoro')}
            className="peer"
            name="mode"
          />
          <span className="absolute rounded-l-lg inset-0 bg-toxic-violet shadow-retro hover:shadow-retro-hover transition:all duration-400 cursor-pointer peer-checked:shadow-neu-inset-violet" />
          <span className="absolute">Pomodoro</span>
        </label>
        <label className="relative flex-1 flex justify-center items-center">
          <input
            type="radio"
            checked={mode === 'break'}
            onChange={() => onModeSwitch('break')}
            className="peer"
            name="mode"
          />
          <span className="absolute rounded-r-lg inset-0 bg-toxic-violet shadow-retro hover:shadow-retro-hover transition:all duration-400 cursor-pointer peer-checked:shadow-neu-inset-violet" />
          <span className="absolute">Pomodoro</span>
        </label>
      </div>
    </div>
  );
}
