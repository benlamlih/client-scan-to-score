import { ChakraProvider, Box } from '@chakra-ui/react';
import { DirectionProvider } from './contexts/DirectionContext';
import { Hero } from './components/landing/Hero';
import { HowItWorks } from './components/landing/HowItWorks';
import { Benefits } from './components/landing/Benefits';
import { CTAFooter } from './components/landing/CTAFooter';
import theme from './theme/theme';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DirectionProvider>
        <Box 
          width="100%"
          maxWidth="100vw"
          margin="0 auto"
          overflow="hidden"
        >
          <Hero />
          <HowItWorks />
          <Benefits />
          <CTAFooter />
        </Box>
      </DirectionProvider>
    </ChakraProvider>
  );
}

export default App;
