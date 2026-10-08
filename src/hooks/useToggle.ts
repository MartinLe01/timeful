import { useState } from 'react';

export function useToggle(initial: boolean = false) {
  const [isTimerFocused, setIsOn] = useState(initial);

  function toggle() {
    setIsOn((prev) => !prev);
  }

  return [isTimerFocused, toggle] as const;
}
