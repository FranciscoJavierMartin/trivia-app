import { useState } from 'react';
import { GameConfig, GameSession } from '../types';
import { CATEGORIES, DIFFICULTIES, GAME_STATE } from '../constants';

const initialConfig: GameConfig = {
  category: CATEGORIES[0].value,
  difficulty: DIFFICULTIES[0].value,
};

const initialGameSession: GameSession = {
  state: GAME_STATE.SETUP,
};

export default function useGameState() {
  const [config, setConfig] = useState<GameConfig>(initialConfig);
  const [gameSession, setGameSession] =
    useState<GameSession>(initialGameSession);

  function updateConfig(newCOnfig: Partial<GameConfig>) {
    setConfig((prev) => ({ ...prev, ...newCOnfig }));
  }

  function fetchNewQuestion() {
    setGameSession((prev) => ({
      ...prev,
      state: GAME_STATE.LOADING,
    }));
  }

  return {
    config,
    updateConfig,
    gameState: gameSession.state,
    fetchNewQuestion,
  };
}
