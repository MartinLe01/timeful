import { useReducer } from 'react';

type ModeType = 'pomodoro' | 'break';

interface Timer {
  mode: ModeType;
  remainingTime: number;
  isRunning: boolean;
}

type TimerActions =
  | { type: 'switch'; to: string }
  | { type: 'decreaseTime'; by: number }
  | { type: 'start' }
  | { type: 'stop' }
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
      if (
        action.to !== undefined &&
        (action.to === 'pomodoro' || action.to === 'break')
      ) {
        return updateTimer(state, {
          mode: action.to,
          remainingTime: durations[action.to],
        });
      } else {
        return state;
      }
    case 'decreaseTime': {
      const remainingTime = state.remainingTime - action.by;
      return updateTimer(state, { remainingTime });
    }
    case 'start':
      return updateTimer(state, { isRunning: true });

    case 'stop':
      return updateTimer(state, { isRunning: false });

    case 'reset':
      if (state.mode === 'pomodoro') {
        return updateTimer(state, { remainingTime: 25 * 60 });
      } else if (state.mode === 'break') {
        return updateTimer(state, { remainingTime: 5 * 60 });
      } else {
        return state;
      }

    default:
      return state;
  }
}

export function useTimer() {
  const [timer, dispatch] = useReducer(timerReducer, {
    mode: 'pomodoro',
    remainingTime: 25 * 60,
    isRunning: false,
  });

  return {
    mode: timer.mode,
    remainingTime: timer.remainingTime,
    isRunning: timer.isRunning,
    switch: (mode: ModeType) => dispatch({ type: 'switch', to: mode }),
    decreaseTime: (by: number) => dispatch({ type: 'decreaseTime', by }),
    start: () => dispatch({ type: 'start' }),
    stop: () => dispatch({ type: 'stop' }),
    reset: () => dispatch({ type: 'reset' }),
  };
}
