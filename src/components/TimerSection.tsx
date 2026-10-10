import { SessionControls } from './SessionControls';
import { TimerDisplay } from './TimerDisplay';
import { Button } from './Button';

interface TimerSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

type TimerMode = 'pomodoro' | 'break';

const durations: Record<TimerMode, number> = {
  pomodoro: 25 * 60,
  break: 5 * 60,
};

export function TimerSection({ isTimerFocused, onClick }: TimerSectionProps) {
  return (
    <div
      className={`w-full rounded-2xl transition-all duration-700 ease-in-out md:w-2/3 md:mx-auto p-8 flex
        ${
          isTimerFocused
            ? 'grow-3 basis-0 shadow-neu-inset dark:shadow-neu-inset-dark'
            : 'grow basis-0 shadow-neu dark:shadow-neu-dark hover:shadow-neu-low hover:dark:shadow-neu-dark-low'
        } `}
      onClick={isTimerFocused ? () => {} : onClick}
    >
      <div
        className={`shadow-neu dark:shadow-neu-dark rounded-xl flex-1 flex-col p-10 ${isTimerFocused ? 'flex' : 'hidden'}`}
      >
        <SessionControls />
        <div className="flex-4 flex flex-col justify-start gap-8">
          <TimerDisplay duration={durations.pomodoro} />
          <Button label="Start" onClick={() => console.log('Timer started')} />
        </div>
      </div>
    </div>
  );
}
