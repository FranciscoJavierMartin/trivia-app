import { Score } from '../types';
import Button from './ui/Button';

interface GameOverScreenProps {
  score: Score;
}

export default function GameOverScreen({ score }: GameOverScreenProps) {
  return (
    <>
      <h2 className='text-2xl font-bold'>Game Over!</h2>
      <p>You had {score.wrong} incorrect answers</p>
      <Button variant='primary'>Try Again</Button>
    </>
  );
}
