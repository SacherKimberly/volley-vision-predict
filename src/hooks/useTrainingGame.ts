
import { useState, useCallback } from 'react';
import { Scene } from '../types/Scene';

export const useTrainingGame = (scenes: Scene[]) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentScene = scenes[currentSceneIndex];

  const handleVideoStop = useCallback(() => {
    setIsWaitingForInput(true);
    
    // Timeout nach 2 Sekunden
    const timeout = setTimeout(() => {
      if (isWaitingForInput) {
        handleAnswer(false);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isWaitingForInput]);

  const handleAnswer = useCallback((correct: boolean) => {
    setIsWaitingForInput(false);
    setTotalAttempts(prev => prev + 1);
    
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Feedback für 1.5 Sekunden anzeigen
    setTimeout(() => {
      setShowFeedback(false);
      
      if (currentSceneIndex + 1 >= scenes.length) {
        setIsFinished(true);
      } else {
        setCurrentSceneIndex(prev => prev + 1);
      }
    }, 1500);
  }, [currentSceneIndex, scenes.length]);

  const handleKeyPress = useCallback((key: string) => {
    if (!isWaitingForInput || !currentScene) return;
    
    const correct = key === currentScene.expectedKey;
    handleAnswer(correct);
  }, [isWaitingForInput, currentScene, handleAnswer]);

  const restart = useCallback(() => {
    setCurrentSceneIndex(0);
    setIsWaitingForInput(false);
    setShowFeedback(false);
    setIsCorrect(false);
    setTotalAttempts(0);
    setCorrectAnswers(0);
    setIsFinished(false);
  }, []);

  return {
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
    totalScenes: scenes.length
  };
};
