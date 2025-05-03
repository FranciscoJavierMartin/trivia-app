import { useState } from 'react';
import { GameConfig, GameSession } from '../types';
import { CATEGORIES, DIFFICULTIES, GAME_STATE } from '../constants';
import { getQuestion } from '../actions/questions';

const initialConfig: GameConfig = {
  category: CATEGORIES[0].value,
  difficulty: DIFFICULTIES[0].value,
};

const initialGameSession: GameSession = {
  state: GAME_STATE.SETUP,
  questionData: {
    question: '',
    answers: [],
    correctAnswer: '',
  },
};

export default function useGameState() {
  const [config, setConfig] = useState<GameConfig>(initialConfig);
  const [gameSession, setGameSession] =
    useState<GameSession>(initialGameSession);

  function updateConfig(newCOnfig: Partial<GameConfig>) {
    setConfig((prev) => ({ ...prev, ...newCOnfig }));
  }

  async function fetchNewQuestion() {
    setGameSession((prev) => ({
      ...prev,
      state: GAME_STATE.LOADING,
    }));

    try {
      const questionData = await getQuestion(
        config.category,
        config.difficulty,
      );

      setGameSession((prev) => ({
        ...prev,
        state: GAME_STATE.PLAYING,
        questionData,
      }));
    } catch {
      setGameSession((prev) => ({
        ...prev,
        state: GAME_STATE.ERROR,
      }));
    }
  }

  return {
    config,
    updateConfig,
    gameState: gameSession.state,
    questionData: gameSession.questionData,
    fetchNewQuestion,
  };
}
