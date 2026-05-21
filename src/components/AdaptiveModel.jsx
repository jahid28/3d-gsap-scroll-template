import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { KevinOptimized } from '../KevinOptimized';
import { LucyOptimized } from '../LucyOptimized';

export function AdaptiveModel({ capability, scale = [5, 5, 5], modelType = 'kevin', ...props }) {
  // For now, we'll use the same model but with different optimizations
  // In the future, you can create multiple model versions:
  // - kevin_mobile.glb (simplified, < 1MB)
  // - kevin_medium.glb (medium detail, < 3MB)
  // - kevin_full.glb (full detail, < 8MB)
  
  const modelUrl = useMemo(() => {
    switch (capability) {
      case 'fallback':
        return modelType === 'lucy' ? '/lucysmalloutput.glb' : '/kevinfix.glb';
      case 'mobile':
        return modelType === 'lucy' ? '/lucysmalloutput.glb' : '/kevinfix.glb';
      case 'medium':
        return modelType === 'lucy' ? '/lucysmalloutput.glb' : '/kevinfix.glb';
      case 'full':
      default:
        return modelType === 'lucy' ? '/lucysmalloutput.glb' : '/kevinfix.glb';
    }
  }, [capability, modelType]);

  // Optimize scale based on capability
  const optimizedScale = useMemo(() => {
    let baseScale = scale;
    
    // Lucy needs a much larger scale to be 3x bigger
    if (modelType === 'lucy') {
      baseScale = [scale[0] * 3.0, scale[1] * 3.0, scale[2] * 3.0];
    }
    
    switch (capability) {
      case 'fallback':
        return [baseScale[0] * 0.8, baseScale[1] * 0.8, baseScale[2] * 0.8];
      case 'mobile':
        return [baseScale[0] * 0.9, baseScale[1] * 0.9, baseScale[2] * 0.9];
      case 'medium':
        return baseScale;
      case 'full':
      default:
        return baseScale;
    }
  }, [scale, capability, modelType]);

  // Preload the model
  useGLTF.preload(modelUrl);

  // Return the appropriate optimized model
  if (modelType === 'lucy') {
    return (
      <LucyOptimized 
        scale={optimizedScale} 
        {...props}
      />
    );
  }

  return (
    <KevinOptimized 
      scale={optimizedScale} 
      {...props}
    />
  );
} 