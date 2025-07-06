
import React from 'react';
import { VideoPlayer } from './VideoPlayer';
import { FeedbackOverlay } from './FeedbackOverlay';
import { ScoreDisplay } from './ScoreDisplay';
import { FinalScore } from './FinalScore';
import { useKeyboardInput } from '../hooks/useKeyboardInput';
import { useTrainingGame } from '../hooks/useTrainingGame';
import { scenes } from '../data/scenes';

export const BeachvolleyballTraining: React.FC = () => {
  const {
    currentScene,
    currentSceneIndex,
    isWaitingForInput,
    showFeedback,
    isCorrect,
    totalAttempts,
    correctAnswers,
    isFinished,
    handleVideoStop,
    handleKeyPress,
    restart,
    totalScenes
  } = useTrainingGame(scenes);

  useKeyboardInput(handleKeyPress, isWaitingForInput);

  const handleVideoError = () => {
    console.error('Video konnte nicht geladen werden:', currentScene?.video);
    // Zur nächsten Szene springen bei Fehler
    setTimeout(() => {
      if (currentSceneIndex + 1 >= scenes.length) {
        restart();
      } else {
        handleKeyPress(''); // Trigger next scene
      }
    }, 2000);
  };

  if (isFinished) {
    return (
      <FinalScore
        correctAnswers={correctAnswers}
        totalAttempts={totalAttempts}
        onRestart={restart}
      />
    );
  }

  if (!currentScene) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div>Lade Training...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <VideoPlayer
        scene={currentScene}
        onVideoStop={handleVideoStop}
        onVideoError={handleVideoError}
      />
      
      <ScoreDisplay
        currentScene={currentSceneIndex + 1}
        totalScenes={totalScenes}
        correctAnswers={correctAnswers}
        totalAttempts={totalAttempts}
      />
      
      <FeedbackOverlay
        isVisible={showFeedback}
        isCorrect={isCorrect}
      />
    </>
  );
};
