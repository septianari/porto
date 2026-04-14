import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      bg: 'transparent',
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "var(--font-mplus-rounded), sans-serif",
};

const colors = {
  glassTeal: '#88ccca',
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
