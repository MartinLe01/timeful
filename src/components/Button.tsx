interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 p-2 md:p-6 shadow-neu-hard dark:shadow-neu-dark-hard rounded-lg cursor-pointer font-extrabold text-xl transition-all duration-300 
      text-toxic-violet dark:text-slate-50 hover:bg-light-violet hover:text-slate-50 hover:dark:bg-toxic-violet hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}
