import { Box, Button, Container, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { MotionBox, fadeInUp, staggerContainer } from '../shared/MotionBox';

export const CTAFooter = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, primary.600, primary.500)',
    'linear(to-r, primary.900, primary.800)'
  );

  return (
    <Box
      as="section"
      bgGradient={bgGradient}
      color="white"
      py={{ base: '16', md: '20' }}
      position="relative"
      overflow="hidden"
      width="100%"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2%, transparent 12%)"
        bgSize="24px 24px"
        opacity="0.4"
      />

      <Container position="relative">
        <MotionBox
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          width="100%"
        >
          <Stack
            spacing={{ base: '10', md: '12' }}
            align="center"
            textAlign="center"
            width="100%"
          >
            <MotionBox variants={fadeInUp} width="100%">
              <Stack spacing={{ base: '4', md: '6' }}>
                <Heading
                  size={{ base: 'xl', md: '2xl' }}
                  fontWeight="bold"
                  lineHeight="1.2"
                >
                  Ready to Transform Your Grading Process?
                </Heading>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="whiteAlpha.900"
                  maxW="3xl"
                  mx="auto"
                >
                  Join thousands of educators who are saving time and improving feedback quality.
                  Start your free trial today!
                </Text>
              </Stack>
            </MotionBox>

            <MotionBox variants={fadeInUp} width="100%">
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing="4"
                justify="center"
                width="100%"
              >
                <Button
                  size="lg"
                  bg="white"
                  color="primary.600"
                  _hover={{
                    bg: 'gray.100',
                    transform: 'translateY(-2px)',
                    shadow: 'xl',
                  }}
                  _active={{ bg: 'gray.200' }}
                  height="14"
                  px="8"
                  fontSize="md"
                  fontWeight="bold"
                  shadow="md"
                  transition="all 0.2s"
                >
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.700"
                  _hover={{
                    bg: 'whiteAlpha.200',
                    borderColor: 'white',
                  }}
                  height="14"
                  px="8"
                  fontSize="md"
                  fontWeight="bold"
                >
                  Schedule Demo
                </Button>
              </Stack>
            </MotionBox>

            <MotionBox variants={fadeInUp} width="100%">
              <Text fontSize="sm" color="whiteAlpha.900">
                No credit card required • 14-day free trial • Cancel anytime
              </Text>
            </MotionBox>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}; 