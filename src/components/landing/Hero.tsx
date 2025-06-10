import { Box, Button, Container, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { MotionBox, fadeInUp, staggerContainer } from '../shared/MotionBox';

export const Hero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, primary.50, white)',
    'linear(to-b, gray.800, gray.900)'
  );

  return (
    <Box
      as="section"
      pt={{ base: '16', md: '24' }}
      pb={{ base: '12', md: '24' }}
      bgGradient={bgGradient}
      overflow="hidden"
      width="100%"
    >
      <Container>
        <MotionBox
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          width="100%"
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '12', md: '16' }}
            align="center"
            justify="space-between"
            width="100%"
          >
            <MotionBox flex="1" variants={fadeInUp} width="100%">
              <Stack spacing="8" maxW={{ md: '2xl' }} textAlign={{ base: 'center', md: 'start' }}>
                <Stack spacing="4">
                  <Text
                    color="primary.500"
                    fontWeight="semibold"
                    fontSize="lg"
                    letterSpacing="wide"
                  >
                    AI-POWERED GRADING PLATFORM
                  </Text>
                  <Heading
                    as="h1"
                    size={{ base: '3xl', md: '4xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="1.2"
                  >
                    Scan to Score
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    maxW="lg"
                  >
                    AI-Powered Grading for Smarter Classrooms
                  </Text>
                </Stack>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing="4"
                  justify={{ base: 'center', md: 'start' }}
                >
                  <Button
                    size="lg"
                    colorScheme="primary"
                    height="14"
                    px="8"
                    fontSize="md"
                    shadow="lg"
                    _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
                    transition="all 0.2s"
                  >
                    Try the Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    colorScheme="primary"
                    height="14"
                    px="8"
                    fontSize="md"
                    _hover={{ bg: 'primary.50' }}
                  >
                    Watch Video
                  </Button>
                </Stack>
                <Text
                  fontSize="sm"
                  color={useColorModeValue('gray.500', 'gray.400')}
                  textAlign={{ base: 'center', md: 'start' }}
                >
                  Trusted by 1000+ educators worldwide
                </Text>
              </Stack>
            </MotionBox>
            <MotionBox
              flex="1"
              maxW={{ md: 'xl' }}
              display={{ base: 'none', md: 'block' }}
              variants={fadeInUp}
            >
              <Box
                bg={useColorModeValue('primary.50', 'primary.900')}
                rounded="2xl"
                p="8"
                shadow="2xl"
                position="relative"
                height="400px"
              >
                {/* Placeholder for illustration or screenshot */}
                <Box
                  position="absolute"
                  inset="0"
                  bg="primary.500"
                  opacity="0.1"
                  rounded="2xl"
                />
              </Box>
            </MotionBox>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}; 