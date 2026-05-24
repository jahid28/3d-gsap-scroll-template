import react, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KevinOptimized } from './KevinOptimized.jsx';
import { HydraOptimized } from './HydraOptimized.jsx';
import { KrakenOptimized } from './KrakenOptimized.jsx';

gsap.registerPlugin(ScrollTrigger);

import { div } from 'three/tsl';

const Scene = ({ progress, modelType = 'kevin' }) => {
    const cameraRef = useRef(null);
    useFrame(() => {
        // console.log("Camera position:", cameraRef.current.position);
        cameraRef.current.lookAt(0, 0, 0)
    })

    useEffect(() => {

        const updateCamPos = () => {
            const position = [[2.6, 0.6, 2.1],[-2.8, 0.2, 2.3], [0, 3, 0.2], [-2, -0.4, -1],[0, 3, 0.2], [0.4, -2.2, 0], [0, 2.5, 3.6]];

            if (progress >= 1) {

                gsap.to(cameraRef.current.position, {
                    x: 0,
                    y: 2.5,
                    z: 3.6,
                    duration: 0.1,
                    ease: 'power1.out',
                });
            } else {
                const segmentProgress = 1 / 6;

                const segmentIndex = Math.floor(progress / segmentProgress);
                console.log("Segment Index:", segmentIndex);
                const percentage = (progress % segmentProgress) / segmentProgress;
                console.log("Percentage:", percentage);
                const [startX, startY, startZ] = position[segmentIndex];
                const [endX, endY, endZ] = position[segmentIndex + 1];
                const x = startX + (endX - startX) * percentage;
                const y = startY + (endY - startY) * percentage;
                const z = startZ + (endZ - startZ) * percentage;

                gsap.to(cameraRef.current.position, {
                    x,
                    y,
                    z,
                    duration: 0.1,
                    ease: 'power1.out',
                });
            }

        };
        updateCamPos();
    }, [progress, cameraRef.current])

    return (
        <>

            {/* <OrbitControls/> */}

            <PerspectiveCamera ref={cameraRef} fov={65} near={0.1} far={10000} makeDefault
                position={[0, 0, 0]}
            // // position={[0, 3, 0.2]} 
            // position={[0.4, -2.2, 0]} 
            // position={[0, 2.5, 3.6]} 


            />

            {/* Lighting Setup */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
            <directionalLight position={[-5, 5, 10]} intensity={0.6} />
            <pointLight position={[-10, -10, -10]} intensity={0.4} />
            <pointLight position={[0, 10, 0]} intensity={0.3} />

            {modelType === 'hydra' ? (
                <HydraOptimized scale={[2.5, 2.5, 2.5]} />
            ) : modelType === 'kraken' ? (
                <KrakenOptimized scale={[2.5, 2.5, 2.5]} />
            ) : (
                <KevinOptimized scale={[2.5, 2.5, 2.5]} />
            )}
            {/* <axesHelper args={[500]} /> */}

        </>
    )
}


export default Scene;   
