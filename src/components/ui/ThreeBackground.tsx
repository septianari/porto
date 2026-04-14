'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useColorModeValue, Box, Spinner, Center as ChakraCenter } from '@chakra-ui/react';

const AvatarCharacter = () => {
  const groupRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);
  
  const skinColor = "#ffdbac";
  const suitColor = useColorModeValue("#2d3748", "#1a202c");
  const hairColor = "#4a5568";
  const glassesColor = "#000000";

  useFrame((state, delta) => {
    time.current += delta;
    const t = time.current;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(t * 2) * 0.3 - 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* Body / Suit (Chubby/Gemuk) */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={suitColor} />
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.5, 0.4, 0.6, 32]} />
        <meshStandardMaterial color={suitColor} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>

      {/* Wavy Hair */}
      <group position={[0, 1.4, 0]}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <mesh key={i} position={[Math.cos(i) * 0.25, 0.15, Math.sin(i) * 0.25]}>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshStandardMaterial color={hairColor} />
          </mesh>
        ))}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.3, 12, 12]} />
          <meshStandardMaterial color={hairColor} />
        </mesh>
      </group>

      {/* Glasses */}
      <group position={[0, 1.3, 0.32]}>
        <mesh position={[-0.14, 0, 0]}>
          <torusGeometry args={[0.07, 0.015, 8, 24]} />
          <meshStandardMaterial color={glassesColor} />
        </mesh>
        <mesh position={[0.14, 0, 0]}>
          <torusGeometry args={[0.07, 0.015, 8, 24]} />
          <meshStandardMaterial color={glassesColor} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.1, 0.02, 0.01]} />
          <meshStandardMaterial color={glassesColor} />
        </mesh>
      </group>

      {/* Arms */}
      <mesh ref={armRef} position={[0.5, 0.7, 0]} rotation={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.08, 0.08, 0.5]} />
        <meshStandardMaterial color={suitColor} />
      </mesh>
      <mesh position={[-0.5, 0.6, 0]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.08, 0.08, 0.5]} />
        <meshStandardMaterial color={suitColor} />
      </mesh>
    </group>
  );
};

export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false);
  const bgColor = useColorModeValue('#f0e7db', '#202023');
  const textColor = useColorModeValue('#2d3748', '#88ccca');
  const cardBorderColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Box h="300px" w="full" bg={bgColor} borderRadius="xl" mb={6}>
        <ChakraCenter h="full">
          <Spinner size="xl" color="teal.500" />
        </ChakraCenter>
      </Box>
    );
  }

  return (
    <Box 
      h="300px" 
      w="full" 
      mb={6} 
      mt={4}
      borderRadius="xl"
      overflow="hidden"
      bg={bgColor}
      position="relative"
      borderWidth="1px"
      borderColor={cardBorderColor}
    >
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[-5, 5, 5]} angle={0.25} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <AvatarCharacter />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={5} blur={2.5} far={1} />
          
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
            <Text
              position={[0, 1.8, 0]}
              fontSize={0.45}
              color={textColor}
              anchorX="center"
              anchorY="middle"
            >
              AW. Septian
            </Text>
          </Float>
        </Suspense>
      </Canvas>
    </Box>
  );
}
