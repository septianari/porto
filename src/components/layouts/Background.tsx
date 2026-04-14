'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useColorModeValue } from '@chakra-ui/react';
import * as THREE from 'three';

const MovingBlob = ({ color, speed, position, size }: { color: string, speed: number, position: [number, number, number], size: number }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta * speed;
    const t = time.current;
    if (mesh.current) {
      mesh.current.position.x = initialPos.x + Math.sin(t) * 2;
      mesh.current.position.y = initialPos.y + Math.cos(t * 0.8) * 1.5;
    }
  });

  return (
    <mesh ref={mesh} position={initialPos}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
};

const BackgroundScene = () => {
  const color1 = useColorModeValue('#88ccca', '#2d3748'); // Teal / Dark
  const color2 = useColorModeValue('#fbd38d', '#805ad5'); // Orange / Purple
  const color3 = useColorModeValue('#feb2b2', '#3182ce'); // Red / Blue

  return (
    <>
      <MovingBlob color={color1} speed={0.4} position={[-4, 2, -5]} size={4} />
      <MovingBlob color={color2} speed={0.3} position={[4, -2, -5]} size={5} />
      <MovingBlob color={color3} speed={0.5} position={[0, 0, -6]} size={4.5} />
    </>
  );
};

export default function Background() {
  const bgColor = useColorModeValue('#f0e7db', '#1a1a1a');

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      background: bgColor,
      filter: 'blur(80px)', // The "Secret Sauce" for the Aura look
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <BackgroundScene />
      </Canvas>
    </div>
  );
}
