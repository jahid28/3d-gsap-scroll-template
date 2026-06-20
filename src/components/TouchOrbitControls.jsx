import React, { useRef, useState, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function TouchOrbitControls({ 
  enableZoom = false, 
  enablePan = true, 
  maxDistance = 10, 
  minDistance = 2 
}) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  
  const [touchStart, setTouchStart] = useState(null);
  const [lastTouch, setLastTouch] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [targetRotation, setTargetRotation] = useState(new THREE.Euler());
  const [currentRotation, setCurrentRotation] = useState(new THREE.Euler());

  // Initialize camera position
  useEffect(() => {
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  // Touch event handlers
  const handleTouchStart = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY
    });
    setLastTouch({
      x: touch.clientX,
      y: touch.clientY
    });
    setIsDragging(true);
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    if (!touchStart || !lastTouch) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - lastTouch.x;
    const deltaY = touch.clientY - lastTouch.y;

    // Calculate rotation based on touch movement
    const rotationSpeed = 0.01;
    const newRotation = new THREE.Euler(
      currentRotation.x - deltaY * rotationSpeed,
      currentRotation.y + deltaX * rotationSpeed,
      0
    );

    setTargetRotation(newRotation);
    setLastTouch({
      x: touch.clientX,
      y: touch.clientY
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTouchStart(null);
    setLastTouch(null);
  };

  // Smooth rotation animation
  useFrame(() => {
    if (targetRotation && currentRotation) {
      // Smooth interpolation
      const lerpFactor = 0.1;
      currentRotation.x += (targetRotation.x - currentRotation.x) * lerpFactor;
      currentRotation.y += (targetRotation.y - currentRotation.y) * lerpFactor;

      // Apply rotation to camera
      camera.position.x = Math.sin(currentRotation.y) * Math.cos(currentRotation.x) * 5;
      camera.position.y = Math.sin(currentRotation.x) * 5;
      camera.position.z = Math.cos(currentRotation.y) * Math.cos(currentRotation.x) * 5;
      
      camera.lookAt(0, 0, 0);
    }
  });

  // Add touch event listeners
  useEffect(() => {
    const canvas = gl.domElement;
    
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [gl, touchStart, lastTouch, currentRotation]);

  return null; // This component doesn't render anything
} 