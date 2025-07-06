
import { Scene } from '../types/Scene';

export const scenes: Scene[] = [
  { 
    video: "clip1.mp4", 
    expectedKey: "A", 
    stopAt: 3.4,
    description: "Diagonal Cross erwartet"
  },
  { 
    video: "clip2.mp4", 
    expectedKey: "D", 
    stopAt: 3.7,
    description: "Linie erwartet"
  },
  { 
    video: "clip3.mp4", 
    expectedKey: "W", 
    stopAt: 2.9,
    description: "Shot nach vorn erwartet"
  }
];
