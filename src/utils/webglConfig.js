export const getOptimizedGLConfig = (capability) => {
  const isMobile = window.innerWidth < 768;
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);

  const baseConfig = {
    alpha: true,
    powerPreference: "high-performance",
    failIfMajorPerformanceCaveat: false,
    preserveDrawingBuffer: false,
    depth: true,
    stencil: false,
    logarithmicDepthBuffer: false
  };

  switch (capability) {
    case 'fallback':
      return {
        ...baseConfig,
        antialias: false,
        precision: "lowp",
        depth: false,
        alpha: false
      };

    case 'mobile':
      return {
        ...baseConfig,
        antialias: false,
        precision: "mediump",
        depth: true,
        alpha: true
      };

    case 'medium':
      return {
        ...baseConfig,
        antialias: isIOS, // Enable on iOS for better quality
        precision: "mediump",
        depth: true,
        alpha: true
      };

    case 'full':
    default:
      return {
        ...baseConfig,
        antialias: true,
        precision: "highp",
        depth: true,
        alpha: true
      };
  }
};

export const getOptimizedDPR = (capability) => {
  switch (capability) {
    case 'fallback':
      return [0.5, 1];
    case 'mobile':
      return [0.75, 1];
    case 'medium':
      return [1, 1.5];
    case 'full':
    default:
      return [1, 2];
  }
};

export const getOptimizedShadows = (capability) => {
  return capability !== 'fallback' && capability !== 'mobile';
}; 