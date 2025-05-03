import { CircleCheck, CircleX } from 'lucide-react';
import Button from './ui/Button';

export default function QuestionScreen() {
  return (
    <>
      <p>
        Which planet in out solar system has the most moons, boasting an
        impressive 92 discovered so far?
      </p>
      <div className='space-y-3'>
        <Button>Mars</Button>
        <Button>Sun</Button>
        <Button>Moon</Button>
        <Button>Venus</Button>
      </div>
      <Button variant='primary'>Next question</Button>
      <div className='text-center text-sm'>
        <div className='flex items-center justify-center gap-2'>
          <CircleCheck className='text-green-500' />
          <span className='text-green-500'>1 corrent</span>
          <CircleX className='text-red-500' />
          <span className='text-red-500'>1 wrong</span>
        </div>
      </div>
    </>
  );
}
