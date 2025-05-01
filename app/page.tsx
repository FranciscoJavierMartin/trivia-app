import { Gamepad2 } from 'lucide-react';

export default function Home() {
  return (
    <div className='bg-blue-200 min-h-screen flex items-center justify-center text-white p-4'>
      <div className='w-full max-w-lg bg-blue-100 py-8 px-6 rounded-lg'>
        <h1 className='text-2xl font-bold flex items-center justify-center gap-2'>
          <Gamepad2 className='size-10 text-pink' />
          Trivia game
        </h1>
      </div>
    </div>
  );
}
