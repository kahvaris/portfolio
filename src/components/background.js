// src/components/BackG.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useTexture } from '@react-three/drei';

const BG = styled.div`
  background-image: url("/BG.png");
  background-size: cover;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  transition: background-color 0.3s;
`;



  const ScrollingLandscape = () => {
    const landscapeRef1 = useRef(null);
    const landscapeRef2 = useRef(null);
    const landscapeRef3 = useRef(null);

  
    const texture = useTexture('/BG.PNG');

    const planeWidth = 32;
    const planeHeight = 17.0625;

    // Center the planes vertically
    const verticalOffset = -planeHeight / 2;
  
    // Loop to move both planes
    useFrame(() => {
      if (landscapeRef1.current && landscapeRef2.current && landscapeRef3.current) {
        // Move both planes to the left
        landscapeRef1.current.position.x -= 0.03;
        landscapeRef2.current.position.x -= 0.03;
        landscapeRef3.current.position.x -= 0.03;

  
        // If the first plane has moved completely out of view, reset its position
        if (landscapeRef1.current.position.x < -planeWidth) {
          landscapeRef1.current.position.x = landscapeRef2.current.position.x + planeWidth;
        }
  
        // If the second plane has moved completely out of view, reset its position
        if (landscapeRef2.current.position.x < -planeWidth) {
          landscapeRef2.current.position.x = landscapeRef3.current.position.x + planeWidth;
        }

        // If the third plane has moved completely out of view, reset its position
        if (landscapeRef3.current.position.x < -planeWidth) {
          landscapeRef3.current.position.x = landscapeRef1.current.position.x + planeWidth;
        }
      }
    });
  
    return (
      <>
        {/* First Plane */}
        <mesh ref={landscapeRef1} position={[0, 0, 0]}>
          <planeGeometry args={[planeWidth, planeHeight]} />
          <meshBasicMaterial map={texture} transparent={true} toneMapped={false} />
        </mesh>
  
        {/* Second Plane */}
        <mesh ref={landscapeRef2} position={[planeWidth, 0, 0]}>
          <planeGeometry args={[planeWidth, planeHeight]} />
          <meshBasicMaterial map={texture} transparent={true} toneMapped={false} />
        </mesh>

        {/* Third Plane */}
        <mesh ref={landscapeRef3} position={[planeWidth * 2, 0, 0]}>
          <planeGeometry args={[planeWidth, planeHeight]} />
          <meshBasicMaterial map={texture} transparent={true} toneMapped={false} />
        </mesh>
      </>
    );
  };
  
  const BackG = ({ children }) => {
    return (
      <BG>
        <Canvas
          style={{ position: 'absolute', backgroundSize: 'cover', top: 0, left: 0, width: '100vw', height: '100vh' }}
        >
            <PerspectiveCamera makeDefault
            position={[0, 0, 17]}
            zoom={1}
            near={0.1}
            far={2000}/>
            
          <Suspense fallback={null}>
            <ScrollingLandscape />
          </Suspense>
        </Canvas>
        {children}
      </BG>
    );
  };
  

export default BackG;
