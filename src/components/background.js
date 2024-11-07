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

    const sRefs = [useRef(null), useRef(null), useRef(null)];
    const mRefs = [useRef(null), useRef(null), useRef(null)];
    const bRefs = [useRef(null), useRef(null), useRef(null)];

    const sTexture = useTexture('/BG1.png');
    const mTexture = useTexture('/BG2.png');
    const bTexture = useTexture('/BG3.png');

    const planeWidth = 32;
    const planeHeight = 17.0625;

  
    // Loop to move planes
    useFrame(() => {
      // Sky
      sRefs.forEach((ref, index) => {
        if (ref.current) {
          ref.current.position.x -= 0.01;
          if (ref.current.position.x < -planeWidth) {
            ref.current.position.x += planeWidth * 3;
          }
        }
      });

      // Mountains
      mRefs.forEach((ref, index) => {
        if (ref.current) {
          ref.current.position.x -= 0.02;
          if (ref.current.position.x < -planeWidth) {
            ref.current.position.x += planeWidth * 3;
          }
        }
      });

      // Buildings
      bRefs.forEach((ref, index) => {
        if (ref.current) {
          ref.current.position.x -= 0.03;
          if (ref.current.position.x < -planeWidth) {
            ref.current.position.x += planeWidth * 3;
          }
        }
      });

    });
  
    return (
      <>
        {/* Sky */}
        {sRefs.map((ref, index) => (
          <mesh ref={ref} key={`sky-${index}`} position={[index * planeWidth, 0, 0]}>
            <planeGeometry args={[planeWidth, planeHeight]} />
            <meshBasicMaterial map={sTexture} transparent={true} toneMapped={false} />
          </mesh>
        ))}

        {/* Mountains */}
        {mRefs.map((ref, index) => (
          <mesh ref={ref} key={`mountains-${index}`} position={[index * planeWidth, 0, 0]}>
            <planeGeometry args={[planeWidth, planeHeight]} />
            <meshBasicMaterial map={mTexture} transparent={true} toneMapped={false} />
          </mesh>
        ))}

        {/* Buildings */}
        {bRefs.map((ref, index) => (
          <mesh ref={ref} key={`buildings-${index}`} position={[index * planeWidth, 0, 0]}>
            <planeGeometry args={[planeWidth, planeHeight]} />
            <meshBasicMaterial map={bTexture} transparent={true} toneMapped={false} />
          </mesh>
        ))}
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
