
import React, { useRef, useEffect, useState } from 'react';
import { Scene } from '../types/Scene';

interface VideoPlayerProps {
  scene: Scene;
  onVideoStop: () => void;
  onVideoError: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ scene, onVideoStop, onVideoError }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current && scene) {
      const video = videoRef.current;
      video.src = scene.video;
      video.currentTime = 0;
      video.load();
      
      const handleCanPlay = () => {
        setIsLoading(false);
        video.play().catch(onVideoError);
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= scene.stopAt) {
          video.pause();
          onVideoStop();
        }
      };

      video.addEventListener('canplaythrough', handleCanPlay);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('error', onVideoError);

      return () => {
        video.removeEventListener('canplaythrough', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('error', onVideoError);
      };
    }
  }, [scene, onVideoStop, onVideoError]);

  return (
    <div className="fixed inset-0 bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
