import { ChakraProvider, Box, Button, Stack, Heading } from '@chakra-ui/react';
import { DirectionProvider, useDirection } from './contexts/DirectionContext';
import theme from './theme/theme';

function MainContent() {
  const { direction, toggleDirection } = useDirection();

  return (
    <Box minH="100vh" p={8} dir={direction}>
      <Stack spacing="8">
        <Heading>Welcome to Scan to Score</Heading>
        <Button onClick={toggleDirection}>Switch to {direction === 'ltr' ? 'RTL' : 'LTR'}</Button>
      </Stack>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DirectionProvider>
        <MainContent />
      </DirectionProvider>
    </ChakraProvider>
  );
}

export default App;
