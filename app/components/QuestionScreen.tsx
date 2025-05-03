import { CircleCheck, CircleX } from 'lucide-react';
import Button from './ui/Button';
import { QuestionData } from '../types';

interface QuestionScreenProps {
  questionData: QuestionData;
}

export default function QuestionScreen({ questionData }: QuestionScreenProps) {
  return (
    <>
      <p className='text-center text-lg'>{questionData.question}</p>
      <div className='space-y-3'>
        {questionData.answers.map((answer) => (
          <Button key={answer}>{answer}</Button>
        ))}
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
