
import React from 'react';

interface ScoreDisplayProps {
  currentScene: number;
  totalScenes: number;
  correctAnswers: number;
  totalAttempts: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ 
  currentScene, 
  totalScenes, 
  correctAnswers, 
  totalAttempts 
}) => {
  return (
    <>
      <div className="fixed top-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-sm backdrop-blur-sm">
        Szene: {currentScene}/{totalScenes}
      </div>
      <div className="fixed top-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-sm backdrop-blur-sm">
        Score: {correctAnswers}/{totalAttempts}
      </div>
    </>
  );
};
