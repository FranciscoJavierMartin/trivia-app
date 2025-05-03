import { AlertCircle } from 'lucide-react';
import Button from './ui/Button';

interface ErrorScreenProps {
  onRetry: () => void;
}

export default function ErrorScreen({ onRetry }: ErrorScreenProps) {
  return (
    <>
      <div className='flex items-center justify-center gap-2 text-red-500'>
        <AlertCircle className='w-6' />
        <h2 className='text-xl font-bold'>Oops! Something wen wrong</h2>
      </div>
      <p>You had 0 incorrect answers</p>
      <Button variant='primary' onClick={onRetry}>
        Try again
      </Button>
    </>
  );
}
