import React from 'react';
import { useGLTF } from '@react-three/drei';

export function KrakenOptimized(props) {
  const { nodes, materials } = useGLTF('/krakensmalloutput.glb', '/draco/');

  return (
    <group {...props} dispose={null}>
      <group position={[0.619, 0.862, -0.612]}>
        <mesh
          geometry={nodes.Skeleton_with_Frame_V3.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.619, -0.862, 0.612]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/krakensmalloutput.glb', '/draco/');
