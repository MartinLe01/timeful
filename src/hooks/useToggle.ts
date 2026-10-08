import { useState } from 'react';

export function useToggle(initial: boolean = false) {
  const [isOn, setIsOn] = useState(initial);

  function toggle() {
    setIsOn((prev) => !prev);
  }

  return [isOn, toggle] as const;
}
