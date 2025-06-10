import { Box } from '@chakra-ui/react';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Benefits } from './Benefits';
import { CTAFooter } from './CTAFooter';

export const LandingPage = () => {
  return (
    <Box as="main" minH="100vh">
      <Hero />
      <HowItWorks />
      <Benefits />
      <CTAFooter />
    </Box>
  );
}; 