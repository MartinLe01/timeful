import dark from '../assets/dark.svg';
import light from '../assets/light.svg';

interface HeaderProps {
  isDarkOn: boolean;
  setIsDarkOn: () => void;
}

export function Header({ isDarkOn, setIsDarkOn }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-1 min-h-12 font-normal rounded-2xl transition-all duration-300 ease-in md:w-2/3 md:mx-auto">
      <h1
        className={`font-medium text-2xl py-2 px-4 rounded-xl ${isDarkOn ? 'shadow-neu-dark text-soft-chrome' : 'shadow-neu text-toxic-violet'}`}
      >
        Timeful.
      </h1>

      <label className="relative inline-block w-10 h-10 rounded-xl cursor-pointer">
        <input
          type="checkbox"
          onClick={setIsDarkOn}
          onChange={() => {}}
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
