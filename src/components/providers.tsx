'use client';

import type { ReactNode } from 'react';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '@/theme/theme';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </>
  );
}
