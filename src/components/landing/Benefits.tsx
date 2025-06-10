import { Box, Container, Heading, SimpleGrid, Stack, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaClock, FaBalanceScale, FaBolt } from 'react-icons/fa';
import { MotionBox, fadeInUp, staggerContainer } from '../shared/MotionBox';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const Benefit = ({ title, description, icon, index }: BenefitProps) => {
  const bgBox = useColorModeValue('white', 'gray.800');
  const iconBg = useColorModeValue('primary.50', 'primary.900');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      variants={fadeInUp}
      custom={index}
      width="100%"
    >
      <Stack
        spacing="6"
        p="8"
        bg={bgBox}
        rounded="xl"
        borderWidth="1px"
        borderColor={borderColor}
        shadow="lg"
        textAlign="center"
        align="center"
        height="100%"
        _hover={{
          transform: 'translateY(-4px)',
          shadow: 'xl',
          borderColor: 'primary.500',
        }}
        transition="all 0.2s"
      >
        <Box
          p="4"
          bg={iconBg}
          rounded="full"
          w="20"
          h="20"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={icon} boxSize="10" color="primary.500" />
        </Box>
        <Stack spacing="4">
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            {description}
          </Text>
        </Stack>
      </Stack>
    </MotionBox>
  );
};

export const Benefits = () => {
  const benefits = [
    {
      title: 'Save Time for Teachers',
      description: 'Reduce grading time by up to 80% with our intelligent AI system. Focus on what matters most - teaching.',
      icon: FaClock,
    },
    {
      title: 'Reduce Grading Bias',
      description: 'Ensure fair and consistent grading across all submissions with our standardized AI assessment.',
      icon: FaBalanceScale,
    },
    {
      title: 'Instant & Consistent Feedback',
      description: 'Provide detailed, personalized feedback to students immediately after submission.',
      icon: FaBolt,
    },
  ];

  return (
    <Box 
      as="section" 
      py={{ base: '16', md: '24' }}
      width="100%"
    >
      <Container>
        <MotionBox
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          width="100%"
        >
          <Stack spacing={{ base: '12', md: '16' }} width="100%">
            <Stack spacing="4" align="center" textAlign="center">
              <Heading
                size={{ base: 'xl', md: '2xl' }}
                fontWeight="semibold"
                color={useColorModeValue('gray.900', 'white')}
              >
                Why Choose Scan to Score?
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.400')}
                maxW="3xl"
              >
                Transform your grading process with our powerful AI-driven platform that saves time and improves accuracy
              </Text>
            </Stack>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: '8', md: '10' }}
              pt="8"
              width="100%"
            >
              {benefits.map((benefit, index) => (
                <Benefit key={benefit.title} {...benefit} index={index} />
              ))}
            </SimpleGrid>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}; 