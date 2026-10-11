interface ButtonStyles {
  bg: string;
  shadow: string;
  shadowOnHover: string;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  styles?: ButtonStyles;
}

export function Button({
  label,
  onClick,
  styles = {
    bg: 'bg-light-violet dark:bg-toxic-violet',
    shadow: 'shadow-light dark:shadow-retro',
    shadowOnHover: 'hover:shadow-light-hover dark:hover:shadow-retro-hover',
  },
}: ButtonProps) {
  return (
    <div className="h-1/5 rounded-xl dark:shadow-neu-dark-hard shadow-neu-hard p-2">
      <button
        onClick={onClick}
        className={`${styles.bg} ${styles.shadow} ${styles.shadowOnHover} h-full w-full rounded-lg transition:all duration-400 cursor-pointer font-extrabold text-xl`}
      >
        {label}
      </button>
    </div>
  );
}
