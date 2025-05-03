import { CircleCheck, CircleX } from 'lucide-react';
import Button, { ButtonVariant } from './ui/Button';
import { QuestionData } from '../types';

interface QuestionScreenProps {
  questionData: QuestionData;
  selectedAnswer: string;
  onAnswer: (answer: string) => void;
}

export default function QuestionScreen({
  questionData,
  selectedAnswer,
  onAnswer,
}: QuestionScreenProps) {
  function getAnswerVariant(answer: string): ButtonVariant {
    let answerVariant: ButtonVariant;

    if (!selectedAnswer) {
      answerVariant = 'default';
    } else if (answer === questionData.correctAnswer) {
      answerVariant = 'success';
    } else {
      answerVariant = 'error';
    }

    return answerVariant;
  }

  return (
    <>
      <p className='text-center text-lg'>{questionData.question}</p>
      <div className='space-y-3'>
        {questionData.answers.map((answer) => (
          <Button
            key={answer}
            variant={getAnswerVariant(answer)}
            onClick={() => onAnswer(answer)}
          >
            {answer}
          </Button>
        ))}
      </div>
      {selectedAnswer && <Button variant='primary'>Next question</Button>}
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
