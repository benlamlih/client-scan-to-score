import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  primary: {
    50: '#E6F6FF',
    100: '#BAE3FF',
    200: '#7CC4FA',
    300: '#47A3F3',
    400: '#2186EB',
    500: '#0967D2',
    600: '#0552B5',
    700: '#03449E',
    800: '#01337D',
    900: '#002159',
  },
  secondary: {
    50: '#F5F7FA',
    100: '#E4E7EB',
    200: '#CBD2D9',
    300: '#9AA5B1',
    400: '#7B8794',
    500: '#616E7C',
    600: '#52606D',
    700: '#3E4C59',
    800: '#323F4B',
    900: '#1F2933',
  },
};

const fonts = {
  heading: "'Inter', -apple-system, system-ui, sans-serif",
  body: "'Inter', -apple-system, system-ui, sans-serif",
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      rounded: 'lg',
    },
    variants: {
      solid: (props: { colorScheme: string }) => ({
        bg: props.colorScheme === 'primary' ? 'primary.500' : `${props.colorScheme}.500`,
        color: 'white',
        _hover: {
          bg: props.colorScheme === 'primary' ? 'primary.600' : `${props.colorScheme}.600`,
          _disabled: {
            bg: props.colorScheme === 'primary' ? 'primary.500' : `${props.colorScheme}.500`,
          },
        },
        _active: {
          bg: props.colorScheme === 'primary' ? 'primary.700' : `${props.colorScheme}.700`,
        },
      }),
    },
  },
  Container: {
    baseStyle: {
      maxW: { base: '100%', lg: '1280px' },
      px: { base: '4', md: '6', lg: '8' },
      mx: 'auto',
      width: '100%',
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: '700',
      letterSpacing: '-0.02em',
    },
  },
};

const styles = {
  global: (props: { colorMode: string }) => ({
    'html, body': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      scrollBehavior: 'smooth',
    },
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
      color: props.colorMode === 'dark' ? 'white' : 'gray.900',
      minH: '100vh',
      overflowX: 'hidden',
    },
  }),
};

const theme = extendTheme({
  colors,
  config,
  fonts,
  components,
  styles,
});

export default theme;
