
import React from 'react';

interface FinalScoreProps {
  correctAnswers: number;
  totalAttempts: number;
  onRestart: () => void;
}

export const FinalScore: React.FC<FinalScoreProps> = ({ correctAnswers, totalAttempts, onRestart }) => {
  const percentage = totalAttempts > 0 ? Math.round((correctAnswers / totalAttempts) * 100) : 0;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Training beendet!</h2>
        <div className="text-6xl mb-4">{correctAnswers}/{totalAttempts}</div>
        <div className="text-3xl text-yellow-400 mb-8">{percentage}% richtig</div>
        <button 
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
        >
          Neu starten
        </button>
      </div>
    </div>
  );
};
