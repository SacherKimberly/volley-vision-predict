
import { useEffect } from 'react';

export const useKeyboardInput = (onKeyPress: (key: string) => void, isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key.toUpperCase();
      const validKeys = ['W', 'A', 'S', 'D'];
      
      if (validKeys.includes(pressedKey)) {
        onKeyPress(pressedKey);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onKeyPress, isActive]);
};
