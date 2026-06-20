
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kevin(props) {
  const [scale, setScale] = useState([3.5, 3.5, 3.5]);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768;
      const base = Math.min(window.innerWidth, window.innerHeight);
      
      // Make Kevin smaller on mobile devices
      if (isMobile) {
        // For mobile: use a smaller scale factor
        const s = Math.max(1.5, Math.min(3.0, base / 300));
        setScale([s, s, s]);
      } else {
        // For desktop: keep original logic
      const s = Math.max(0.7, Math.min(3.5, base / 350));
      setScale([s, s, s]);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { nodes, materials } = useGLTF('/kevinfix.glb')
  return (
    <group scale={scale} {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part.geometry}
        material={materials.PaletteMaterial001}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_103.geometry}
            material={materials['PW-MT11030-2']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_104.geometry}
            material={materials['PW-MT11030-3']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_105.geometry}
            material={materials['PW-MT11030-4']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_108.geometry}
            material={materials['PW-MT11030-5']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_109.geometry}
            material={materials['PW-MT11030-6']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_110.geometry}
            material={materials['PW-MT11030-7']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_112.geometry}
            material={materials['color-155 (Cosmetic Thread)']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_114.geometry}
            material={materials['pw-mt11030']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_115.geometry}
            material={materials['PW-MT11030-8']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_116.geometry}
            material={materials['PW-MT11030-11']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_12.geometry}
            material={materials['White-PW-MT11050']}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_15.geometry}
        material={materials.PaletteMaterial002}
        position={[0, -0.084, -0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part_42.geometry}
            material={materials['PW-MT11030']}
        position={[0, -0.084, -0.068]}
      />
    </group>
  )
}

useGLTF.preload('/kevinfix.glb')



