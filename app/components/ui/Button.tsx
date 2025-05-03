import cn from '@/app/utils/cn';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const variantStyles = {
  default: 'bg-gray-900 hover:bg-gray-800 text-gray-300',
  primary: 'bg-pink hover:bg-pink/90 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white',
  error: 'bg-red-600 hover:bg-red-700 text-white',
} as const;

export type ButtonVariant = keyof typeof variantStyles;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: ButtonVariant;
};

export default function Button({
  children,
  className = '',
  variant = 'default',
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        'w-full cursor-pointer rounded-lg p-3 transition-colors',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
