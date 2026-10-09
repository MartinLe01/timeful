export function SessionControls() {
  return (
    <div className="flex-1">
      <div className=" flex justify-start h-2/3 p-2 shadow-neu-hard dark:shadow-neu-dark-hard rounded-xl">
        <button className="bg-toxic-violet flex-1 rounded-l-lg shadow-retro hover:shadow-retro-hover transition:all duration-400 cursor-pointer">
          Pomodoro
        </button>
        <button className="bg-toxic-violet flex-1 rounded-r-lg shadow-retro hover:shadow-retro-hover transition:all duration-400 cursor-pointer">
          Break
        </button>
      </div>
    </div>
  );
}
