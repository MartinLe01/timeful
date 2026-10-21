type ButtonVariations = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variation?: ButtonVariations;
}

const variationStyles: Record<ButtonVariations, string> = {
  primary:
    'text-toxic-violet dark:text-slate-50 shadow-neu-hard dark:shadow-neu-dark-hard hover:bg-light-violet hover:text-slate-50 hover:dark:bg-toxic-violet hover:-translate-y-0.5',
  secondary:
    'hover:shadow-neu-inset-low hover:dark:shadow-neu-inset-dark-low text-toxic-violet dark:text-slate-50',
  danger:
    'text-red-700 hover:inset-ring-2 hover:bg-red-300 hover:shadow-inset-red',
};

export function Button({
  children,
  onClick,
  variation = 'primary',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center justify-center gap-0.5 p-2 rounded-lg cursor-pointer font-extrabold text-xl transition-all duration-300
      ${variationStyles[variation]}`}
    >
      {children}
    </button>
  );
}
