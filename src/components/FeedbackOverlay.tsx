
import React from 'react';

interface FeedbackOverlayProps {
  isVisible: boolean;
  isCorrect: boolean;
}

export const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({ isVisible, isCorrect }) => {
  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center text-white text-6xl font-bold animate-in fade-in duration-300 ${
      isCorrect ? 'bg-green-500/80' : 'bg-red-500/80'
    }`}>
      {isCorrect ? '✓ RICHTIG!' : '✗ FALSCH!'}
    </div>
  );
};
