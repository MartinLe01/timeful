type ButtonVariations = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variation: ButtonVariations;
}

const variationStyles: Record<ButtonVariations, string> = {
  primary:
    'shadow-neu-hard dark:shadow-neu-dark-hard hover:bg-light-violet hover:text-slate-50 hover:dark:bg-toxic-violet hover:-translate-y-0.5',
  secondary: 'bg-blue-500',
  danger: 'bg-red-500',
};

export function Button({ children, onClick, variation }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center justify-center gap-2 p-2 rounded-lg cursor-pointer font-extrabold text-xl transition-all duration-300 
      text-toxic-violet dark:text-slate-50 ${variationStyles[variation]}`}
    >
      {children}
    </button>
  );
}
