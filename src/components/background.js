// src/components/BackG.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OrthographicCamera, Line } from '@react-three/drei';

const BG = styled.div`
  background: linear-gradient(-45deg, ${({ theme }) => theme.backgroundTheme}, white, ${({ theme }) => theme.backgroundTheme}, white, ${({ theme }) => theme.backgroundTheme}, white);
  background-size: cover;
  padding: 0;
  margin: 0;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  transition: background-color 0.3s;
`;

const Cube = () => {
  const cubeRef = useRef(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh ref={cubeRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};

/*      
    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#cccccc" />
    </mesh>
 */

const CustomLine = ({ points, color, lineWidth }) => {
  return (
    <Line
      points={points} // Array of points [ [x, y, z], [x, y, z], ... ]
      color={color}   // Line color
      lineWidth={lineWidth} // Thickness of the line
      dashed={false} // Set true if you want dashed lines
    />
  );
};

const BackG = ({ children }) => {
    return (
      <BG>
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 5]} // Adjust as needed
          zoom={100} // Adjust this value to control the zoom level
          near={-1000}
          far={1000}
        />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} />
            <Suspense fallback={<div>Loading...</div>}>
                <Cube />
                          {/* Drawing lines */}
          <CustomLine
            points={[
              [-3, 0, 0], // start point
              [3, 0, 0],  // end point
            ]}
            color="blue"
            lineWidth={2}
          />

          <CustomLine
            points={[
              [0, 0, 0], // start point
              [0, 3, 0], // end point
            ]}
            color="red"
            lineWidth={1}
          />

          <CustomLine
            points={[
              [0, 0, 0], // start point
              [0, 0, 3], // end point
            ]}
            color="green"
            lineWidth={1}
          />
            </Suspense>
        </Canvas>
        {children}
      </BG>
    );
  };

export default BackG;
