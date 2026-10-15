interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-1/5 w-full shadow-neu-hard dark:shadow-neu-dark-hard rounded-lg cursor-pointer font-extrabold text-xl transition-all duration-300 
      text-toxic-violet dark:text-slate-50 hover:bg-light-violet hover:text-slate-50 hover:dark:bg-toxic-violet hover:-translate-y-0.5"
    >
      {label}
    </button>
  );
}
