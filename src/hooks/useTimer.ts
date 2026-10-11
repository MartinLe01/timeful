import { useReducer, useEffect } from 'react';

type ModeType = 'pomodoro' | 'break';

interface Timer {
  mode: ModeType;
  remainingTime: number;
  isRunning: boolean;
}

type TimerActions =
  | { type: 'switch'; to: ModeType }
  | { type: 'decreaseTime'; by: number }
  | { type: 'toggle' }
  | { type: 'reset' };

function updateTimer(timer: Timer, changes: Partial<Timer>) {
  return { ...timer, ...changes };
}

const durations: Record<ModeType, number> = {
  pomodoro: 25 * 60,
  break: 5 * 60,
};

function timerReducer(state: Timer, action: TimerActions): Timer {
  switch (action.type) {
    case 'switch':
      return updateTimer(state, {
        mode: action.to,
        remainingTime: durations[action.to],
        isRunning: false,
      });
    case 'decreaseTime': {
      const remainingTime = state.remainingTime - action.by;

      if (remainingTime < 0) {
        const next = state.mode === 'pomodoro' ? 'break' : 'pomodoro';
        return updateTimer(state, {
          mode: next,
          remainingTime: durations[next],
        });
      }

      return updateTimer(state, { remainingTime });
    }
    case 'toggle':
      return updateTimer(state, { isRunning: !state.isRunning });

    case 'reset':
      return updateTimer(state, { remainingTime: durations[state.mode] });

    default:
      return state;
  }
}

export function useTimer() {
  const [timer, dispatch] = useReducer(timerReducer, {
    mode: 'pomodoro',
    remainingTime: durations.pomodoro,
    isRunning: false,
  });

  useEffect(() => {
    if (!timer.isRunning) return;

    const interval = setInterval(() => {
      dispatch({ type: 'decreaseTime', by: 1 });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.isRunning]);

  return {
    mode: timer.mode,
    remainingTime: timer.remainingTime,
    isRunning: timer.isRunning,
    switch: (mode: ModeType) => dispatch({ type: 'switch', to: mode }),
    toggle: () => dispatch({ type: 'toggle' }),
    reset: () => dispatch({ type: 'reset' }),
  };
}
