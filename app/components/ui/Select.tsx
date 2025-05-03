import cn from '@/app/utils/cn';
import { PropsWithChildren, SelectHTMLAttributes } from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  className?: string;
};

export default function Select({
  label,
  className = '',
  children,
}: PropsWithChildren<SelectProps>) {
  return (
    <div>
      <label className='mb-2 block text-left text-sm font-medium'>
        {label}
      </label>
      <select
        className={cn(
          'w-full rounded-lg border-r-[12px] border-transparent bg-gray-900 p-3',
          className,
        )}
      >
        {children}
      </select>
    </div>
  );
}
