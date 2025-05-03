import { Score } from '../types';
import Button from './ui/Button';

interface GameOverScreenProps {
  score: Score;
  onRestart: () => void;
}

export default function GameOverScreen({
  score,
  onRestart,
}: GameOverScreenProps) {
  return (
    <>
      <h2 className='text-2xl font-bold'>Game Over!</h2>
      <p>You had {score.wrong} incorrect answers</p>
      <Button variant='primary' onClick={onRestart}>
        Try Again
      </Button>
    </>
  );
}
