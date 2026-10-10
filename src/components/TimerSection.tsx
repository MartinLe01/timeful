import { SessionControls } from './SessionControls';
import { TimerDisplay } from './TimerDisplay';
import { Button } from './Button';
import { useTimer } from '../hooks/useTimer';

interface TimerSectionProps {
  isTimerFocused: boolean;
  onClick: () => void;
}

export function TimerSection({ isTimerFocused, onClick }: TimerSectionProps) {
  const timer = useTimer();

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
          <TimerDisplay duration={timer.remainingTime} />
          <Button label="Start" onClick={() => console.log('Timer started')} />
        </div>
      </div>
    </div>
  );
}
