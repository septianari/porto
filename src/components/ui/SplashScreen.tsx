'use client';

import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionFlex = motion.create(Flex);

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [counter, setCounter] = useState(0);
  const [showName, setShowName] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const words = ["AW. SEPTIAN"];
  
  const textColor = useColorModeValue('black', 'white');

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCounter(100);
        clearInterval(timer);
        setTimeout(() => setShowName(true), 300);
      } else {
        setCounter(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showName) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 800);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showName, onComplete]);

  const letterVariants = {
    initial: { 
      y: 100, 
      opacity: 0, 
      rotateX: -90,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    animate: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionFlex
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={9999}
          bg="transparent"
          align="center"
          justify="center"
          overflow="hidden"
          style={{ perspective: '1000px' }}
        >
          {/* Progress Counter with Bitcount Font */}
          {!showName && (
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: counter === 100 ? [0, -2, 2, -2, 0] : 0 
              }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
              transition={{ duration: 0.2 }}
            >
              <Heading 
                fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }}
                fontFamily="var(--font-bitcount)"
                fontWeight="400"
                color={textColor}
                textShadow={`0 0 30px ${textColor}44`}
              >
                {counter}%
              </Heading>
            </MotionBox>
          )}

          {/* Name Reveal with 3D Pop */}
          {showName && (
            <Flex direction="column" align="center" justify="center">
              {words.map((word, wIdx) => (
                <Flex key={wIdx} mb={2} py={1}>
                  {word.split("").map((char, lIdx) => (
                    <Box key={lIdx} style={{ perspective: '500px' }}>
                      <MotionHeading
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        fontSize={{ base: "4xl", md: "9xl", lg: "150px" }}
                        color={textColor}
                        mx={0.5}
                        fontFamily="var(--font-bitcount)"
                        fontWeight="400"
                        lineHeight="1"
                        letterSpacing="0.05em"
                        style={{ display: 'inline-block' }}
                        transition={{ 
                          delay: (wIdx * 0.15) + (lIdx * 0.04)
                        }}
                      >
                        {char}
                      </MotionHeading>
                    </Box>
                  ))}
                </Flex>
              ))}
            </Flex>
          )}
          
          {/* Liquid-like Overlay Overlay */}
          <Box 
            position="absolute" 
            top={0} 
            left={0} 
            right={0} 
            bottom={0} 
            bg={useColorModeValue('rgba(240, 231, 219, 0.3)', 'rgba(26, 26, 26, 0.3)')}
            zIndex={-1}
            backdropFilter="blur(15px)"
          />
        </MotionFlex>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
