export const CATEGORIES = [
  { value: 'general', label: 'General Knowledge' },
  { value: 'science', label: 'Science' },
  { value: 'history', label: 'History' },
  { value: 'sports', label: 'Sports' },
] as const;

export const DIFFICULTIES = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
] as const;

export const GAME_STATE = {
  SETUP: 'setup',
  PLAYING: 'playing',
  LOADING: 'loading',
  GAME_OVER: 'gameOver',
  ERROR: 'error',
} as const;

export const MAX_WRONG_ANSWERS = 3;
