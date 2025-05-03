'use server';

import { mockQuestions } from '../questions';
import { Category, Difficulty, QuestionData } from '../types';

export async function getQuestion(category: Category, difficulty: Difficulty) {
  const mockQuestion = mockQuestions[category][difficulty];

  return new Promise<QuestionData>((resolve, reject) => {
    return setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Failed to generate question'));
      } else {
        resolve(mockQuestion);
      }
    }, 2000);
  });
}
