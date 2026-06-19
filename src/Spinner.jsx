import React from 'react';
import { Html } from '@react-three/drei';

export default function Spinner() {
  return (
    <Html center>
      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </Html>
  );
} 