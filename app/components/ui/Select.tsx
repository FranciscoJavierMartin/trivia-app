import { PropsWithChildren, SelectHTMLAttributes } from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

export default function Select({
  label,
  children,
}: PropsWithChildren<SelectProps>) {
  return (
    <div>
      <label className='mb-2 block text-left text-sm font-medium'>
        {label}
      </label>
      <select className='w-full rounded-lg border-r-[12px] border-transparent bg-gray-900 p-3'>
        {children}
      </select>
    </div>
  );
}
