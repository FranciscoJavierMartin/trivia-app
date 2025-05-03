import { Gamepad2 } from 'lucide-react';
import Select from './components/ui/Select';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-blue-200 p-4 text-white'>
      <div className='w-full max-w-lg rounded-lg bg-blue-100 px-6 py-8'>
        <h1 className='flex items-center justify-center gap-2 text-2xl font-bold'>
          <Gamepad2 className='text-pink size-10' />
          Trivia game
        </h1>
        <div className='space-y-6'>
          <Select label='Category'>
            <option value='general'>General Knowledge</option>
            <option value='science'>Science</option>
            <option value='history'>History</option>
          </Select>
          <Select label='Difficulty'>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </Select>
          <Button variant='primary'>Start game</Button>
        </div>
      </div>
    </div>
  );
}
