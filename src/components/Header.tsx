import { useState } from 'react';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';

export function Header() {
  const [isDarkOn, setIsDarkOn] = useState(false);

  return (
    <header className="flex items-center justify-between pr-4 min-h-12 font-normal rounded-2xl">
      <h1 className="font-medium text-toxic-violet text-2xl py-2 px-4 rounded-xl shadow-neu">
        Timeful.
      </h1>

      <label className="relative inline-block w-10 h-10 rounded-xl cursor-pointer">
        <input
          type="checkbox"
          onClick={() => setIsDarkOn(!isDarkOn)}
          checked={isDarkOn}
          className="peer sr-only"
        />
        <span className="absolute inset-0 bg-soft-chrome shadow-neu rounded-xl peer-checked:shadow-neu-inset-violet peer-checked:bg-toxic-violet transition-all ease-in duration-300" />
        <span className="absolute inset-2">
          <img src={isDarkOn ? dark : light} alt="" />
        </span>
      </label>
    </header>
  );
}
