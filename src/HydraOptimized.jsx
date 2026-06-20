import React from 'react';
import { useGLTF } from '@react-three/drei';

export function HydraOptimized(props) {
  const { nodes, materials } = useGLTF('/hydrasmalloutput.glb', '/draco/');

  return (
    <group {...props} dispose={null}>
      <group position={[-0.763, 0.808, -0.179]}>
        <group position={[0.763, -0.808, 0.179]} rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <mesh geometry={nodes.SECONDARY_BOT_V2002_1.geometry} material={materials.PaletteMaterial002} />
          <mesh geometry={nodes.SECONDARY_BOT_V2002_2.geometry} material={materials.PaletteMaterial001} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/hydrasmalloutput.glb', '/draco/');
