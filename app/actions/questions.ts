'use server';

import { z } from 'zod';
import { Ollama } from 'ollama';
import { Category, Difficulty, QuestionData } from '../types';
import zodToJsonSchema from 'zod-to-json-schema';

const ollama = new Ollama();

const QuestionResponseSchema = z
  .object({
    question: z.string(),
    answers: z.array(z.string()),
    correctAnswer: z.string(),
  })
  .refine((data) => data.answers.length === 4, {
    message: 'Must have exactly 4 answers',
  })
  .refine((data) => data.answers.includes(data.correctAnswer), {
    message: 'Correct answer must be one of the provided answers.',
  });

export async function getQuestion(
  category: Category,
  difficulty: Difficulty,
): Promise<QuestionData> {
  try {
    const completion = await ollama.chat({
      model: 'gemma3:4b-it-qat',
      messages: [
        {
          role: 'system',
          content:
            'You are a trivia question generator. For each request, generate a completely unique and interesting question. Never repeat questions. Vary the format and style of questions while maintaining the specified difficulty level.',
        },
        {
          role: 'user',
          content: `Generate a ${difficulty} trivia question about ${category}. Be specific and avoid generic questions. Include interesting facts or lesser-known information.`,
        },
      ],
      format: zodToJsonSchema(QuestionResponseSchema),
    });

    const validatedContent: QuestionData = JSON.parse(
      completion.message.content,
    );

    return validatedContent;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to generate question.');
  }
}
