import { CATEGORIES, DIFFICULTIES, GAME_STATE } from './constants';

export type Category = (typeof CATEGORIES)[number]['value'];
export type Difficulty = (typeof DIFFICULTIES)[number]['value'];
export type GameState = (typeof GAME_STATE)[keyof typeof GAME_STATE];

export interface GameConfig {
  category: Category;
  difficulty: Difficulty;
}

export interface GameSession {
  state: GameState;
}
