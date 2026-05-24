import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useProgressiveEnhancement } from '../hooks/useProgressiveEnhancement';
import { useAdaptiveFrameRate } from '../hooks/useAdaptiveFrameRate';
import { getOptimizedGLConfig, getOptimizedDPR, getOptimizedShadows } from '../utils/webglConfig';
import { TouchOrbitControls } from './TouchOrbitControls';
import { AdaptiveModel } from './AdaptiveModel';
import { StaticImageViewer } from './StaticImageViewer';
import ErrorBoundary from '../ErrorBoundary';
import Spinner from '../Spinner';

export function Optimized3DViewer({ 
  showModel = true, 
  scale = [5, 5, 5],
  enableTouchControls = true,
  modelType = 'kevin',
  modelRotation = [0, 0, 0]
}) {
  const { capability, isLoading } = useProgressiveEnhancement();
  const { targetFPS } = useAdaptiveFrameRate(capability);
  
  const glConfig = getOptimizedGLConfig(capability);
  const dpr = getOptimizedDPR(capability);
  const shadows = getOptimizedShadows(capability);

  // Show fallback for very low-end devices
  if (capability === 'fallback') {
    return <StaticImageViewer />;
  }

  return (
    <ErrorBoundary>
      <Canvas 
        camera={{ 
          position: modelType === 'lucy' ? [0, 0, 8] : [0, 0, 5], 
          fov: modelType === 'lucy' ? 60 : 50 
        }} 
        style={{ background: 'transparent' }}
        gl={{
          ...glConfig,
          // Cap pixel ratio for mobile performance
          pixelRatio: Math.min(window.devicePixelRatio, 1.5)
        }}
        dpr={dpr}
        shadows={shadows}
        frameloop="demand" // Only render when needed
      >
        {/* Show loading state inside Canvas */}
        {isLoading ? (
          <Spinner />
        ) : (
          <Suspense fallback={<Spinner />}>
          {/* Adaptive lighting based on capability */}
          <ambientLight intensity={capability === 'mobile' ? 0.6 : 0.8} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={capability === 'mobile' ? 0.8 : 1.2} 
            castShadow={shadows} 
          />
          <directionalLight 
            position={[-5, 5, 10]} 
            intensity={capability === 'mobile' ? 0.6 : 1.0} 
          />
          
          {/* Conditional point lights based on capability */}
          {capability !== 'mobile' && (
            <>
              <pointLight position={[-10, -10, -10]} intensity={0.6} />
              <pointLight position={[0, 10, 0]} intensity={0.5} />
              <pointLight position={[5, 0, 5]} intensity={0.4} />
            </>
          )}

          {/* Adaptive Model */}
          <AdaptiveModel 
            capability={capability} 
            scale={scale}
            modelType={modelType}
            rotation={modelRotation}
          />

          {/* Adaptive Controls */}
          {enableTouchControls && capability === 'mobile' ? (
            <TouchOrbitControls enableZoom={false} enablePan={true} />
          ) : (
            <OrbitControls 
              enableZoom={false} 
              enablePan={true}
              enableDamping={capability !== 'mobile'} // Disable damping on mobile for performance
              dampingFactor={0.05}
            />
          )}
        </Suspense>
        )}
      </Canvas>
    </ErrorBoundary>
  );
} 
