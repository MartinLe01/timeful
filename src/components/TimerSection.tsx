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
      className={`w-full rounded-2xl transition-all duration-500 ease-in-out md:w-2/3 md:mx-auto p-8 flex
        ${
          isTimerFocused
            ? 'grow-3 basis-0 shadow-neu-inset dark:shadow-neu-inset-dark'
            : 'grow basis-0 shadow-neu dark:shadow-neu-dark hover:shadow-neu-low hover:dark:shadow-neu-dark-low'
        } `}
      onClick={isTimerFocused ? () => {} : onClick}
    >
      <div
        className={`shadow-neu dark:shadow-neu-dark rounded-xl gap-4 flex-1 transition-all duration-700 flex-col p-10 ${isTimerFocused ? 'flex' : 'hidden'}`}
      >
        <div className="h-1/6 md:h-1/7">
          <SessionControls
            mode={timer.mode}
            onModeSwitch={timer.switch}
            radioLabel1="Pomodoro"
            radioLabel2="Break"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <TimerDisplay duration={timer.remainingTime} />
          <Button onClick={() => timer.toggle()}>
            {timer.isRunning ? 'Stop' : 'Start'}
          </Button>
        </div>
      </div>

      <TimerDisplay
        duration={timer.remainingTime}
        isTimerFocused={isTimerFocused}
      />
    </div>
  );
}
