'use client';

import type { ReactNode } from 'react';

import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion, type MotionProps } from 'framer-motion';

type SectionProps = {
  children: ReactNode;
  delay?: number;
};

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Section({ children, delay = 0 }: SectionProps) {
  return (
    <MotionDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.6, delay } satisfies MotionProps['transition']}
      mb={6}
    >
      {children}
    </MotionDiv>
  );
}
