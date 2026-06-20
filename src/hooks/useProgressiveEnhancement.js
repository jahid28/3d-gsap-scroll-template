import { useState, useEffect } from 'react';

export const useProgressiveEnhancement = () => {
  const [capability, setCapability] = useState('basic');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkCapability = async () => {
      try {
        // Check WebGL support
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
          setCapability('fallback');
          setIsLoading(false);
          return;
        }

        // Check device characteristics
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const memory = navigator.deviceMemory || 4;
        const cores = navigator.hardwareConcurrency || 4;
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(userAgent);
        const isAndroid = /android/.test(userAgent);

        // Calculate device score
        let deviceScore = 0;
        
        // Memory score (0-3 points)
        if (memory >= 8) deviceScore += 3;
        else if (memory >= 4) deviceScore += 2;
        else if (memory >= 2) deviceScore += 1;

        // CPU cores score (0-2 points)
        if (cores >= 8) deviceScore += 2;
        else if (cores >= 4) deviceScore += 1;

        // Screen size score (0-2 points)
        if (!isMobile && !isTablet) deviceScore += 2;
        else if (isTablet) deviceScore += 1;

        // iOS specific optimization (iOS has better WebGL performance)
        if (isIOS) deviceScore += 1;

        // Determine capability based on score
        if (deviceScore >= 6) {
          setCapability('full');
        } else if (deviceScore >= 3) {
          setCapability('medium');
        } else if (deviceScore >= 1) {
          setCapability('mobile');
        } else {
          setCapability('fallback');
        }

        console.log(`Device capability: ${capability} (score: ${deviceScore})`);
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking device capability:', error);
        setCapability('fallback');
        setIsLoading(false);
      }
    };

    checkCapability();
  }, []);

  return { capability, isLoading };
}; 