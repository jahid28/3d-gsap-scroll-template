import React from 'react';
import { Html } from '@react-three/drei';

export function StaticImageViewer() {
  return (
    <Html center>
      <img 
        src="/images/kevin_placeholder.png" 
        alt="Kevin - Static View" 
        className="w-full h-full object-cover rounded-full"
      />
    </Html>
  );
} 