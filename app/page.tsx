'use client';
import { JSX } from 'react';
import { Gamepad2 } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import QuestionScreen from './components/QuestionScreen';
import GameOverScreen from './components/GameOverScreen';
import SetupScreen from './components/SetupScreen';
import ErrorScreen from './components/ErrorScreen';
import useGameState from './hooks/useGameState';
import { GAME_STATE } from './constants';

export default function Home() {
  const {
    config,
    updateConfig,
    gameState,
    fetchNewQuestion,
    questionData,
    selectedAnswer,
    handleAnswer,
    score,
    handleRestart,
  } = useGameState();

  function renderGameScreen(): JSX.Element {
    let screen;

    switch (gameState) {
      case GAME_STATE.SETUP:
        screen = (
          <SetupScreen
            category={config.category}
            difficulty={config.difficulty}
            onCategoryChange={(category) => updateConfig({ category })}
            onDifficultyChange={(difficulty) => updateConfig({ difficulty })}
            onStart={fetchNewQuestion}
          />
        );
        break;
      case GAME_STATE.LOADING:
        screen = <LoadingScreen />;
        break;
      case GAME_STATE.GAME_OVER:
        screen = <GameOverScreen score={score} onRestart={handleRestart} />;
        break;
      case GAME_STATE.PLAYING:
        screen = (
          <QuestionScreen
            questionData={questionData}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
            score={score}
          />
        );
        break;
      case GAME_STATE.ERROR:
        screen = <ErrorScreen onRetry={fetchNewQuestion} />;
        break;
    }

    return screen;
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-blue-200 p-4 text-white'>
      <div className='w-full max-w-lg space-y-6 rounded-lg bg-blue-100 px-6 py-8'>
        <h1 className='flex items-center justify-center gap-2 text-2xl font-bold'>
          <Gamepad2 className='text-pink size-10' />
          Trivia game
        </h1>
        <div className='space-y-6'>{renderGameScreen()}</div>
      </div>
    </div>
  );
}
