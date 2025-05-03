import { Gamepad2 } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import QuestionScreen from './components/QuestionScreen';
import GameOverScreen from './components/GameOverScreen';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-blue-200 p-4 text-white'>
      <div className='w-full max-w-lg space-y-6 rounded-lg bg-blue-100 px-6 py-8'>
        <h1 className='flex items-center justify-center gap-2 text-2xl font-bold'>
          <Gamepad2 className='text-pink size-10' />
          Trivia game
        </h1>
        <div className='space-y-6'>
          {/* <LoadingScreen /> */}
          {/* <QuestionScreen /> */}
          <GameOverScreen />
        </div>
      </div>
    </div>
  );
}
