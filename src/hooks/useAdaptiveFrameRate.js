import { useState, useEffect } from 'react';

export const useAdaptiveFrameRate = (capability) => {
  const [targetFPS, setTargetFPS] = useState(60);
  const [maxFPS, setMaxFPS] = useState(60);

  useEffect(() => {
    const determineFrameRate = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const memory = navigator.deviceMemory || 4;
      const cores = navigator.hardwareConcurrency || 4;
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(userAgent);

      let fps = 60;

      // Reduce FPS for lower-end devices
      if (capability === 'fallback') {
        fps = 30;
      } else if (capability === 'mobile') {
        fps = isIOS ? 45 : 30; // iOS handles 45fps better
      } else if (capability === 'medium') {
        fps = 50;
      } else {
        fps = 60; // Full capability
      }

      // Additional reductions for very low-end devices
      if (memory < 2 || cores < 2) {
        fps = Math.min(fps, 30);
      }

      setTargetFPS(fps);
      setMaxFPS(fps);

      console.log(`Adaptive FPS: ${fps} (capability: ${capability})`);
    };

    determineFrameRate();
  }, [capability]);

  return { targetFPS, maxFPS };
}; 