import { Box, Container, Heading, SimpleGrid, Stack, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaCloudUploadAlt, FaRobot, FaChartBar } from 'react-icons/fa';
import { MotionBox, fadeInUp, staggerContainer } from '../shared/MotionBox';

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ElementType;
  index: number;
}

const Feature = ({ title, text, icon, index }: FeatureProps) => {
  const bgBox = useColorModeValue('white', 'gray.800');
  const iconBg = useColorModeValue('primary.50', 'primary.900');
  
  return (
    <MotionBox
      variants={fadeInUp}
      custom={index}
      width="100%"
    >
      <Stack
        spacing={{ base: '4', md: '6' }}
        bg={bgBox}
        p="6"
        rounded="xl"
        shadow="md"
        _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
        transition="all 0.2s"
        height="100%"
      >
        <Box
          p="4"
          bg={iconBg}
          rounded="lg"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w="16"
          h="16"
        >
          <Icon as={icon} boxSize="8" color="primary.500" />
        </Box>
        <Stack spacing="1">
          <Text fontWeight="bold" fontSize="xl">
            {title}
          </Text>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            {text}
          </Text>
        </Stack>
      </Stack>
    </MotionBox>
  );
};

export const HowItWorks = () => {
  const features = [
    {
      title: 'Upload Exam & Reference',
      text: 'Upload your exam papers and reference answers in any format. Support for handwritten and digital documents.',
      icon: FaCloudUploadAlt,
    },
    {
      title: 'Let AI Grade Automatically',
      text: 'Our advanced AI analyzes and grades papers with high accuracy, providing detailed scoring breakdowns.',
      icon: FaRobot,
    },
    {
      title: 'Review Results & Feedback',
      text: 'Get comprehensive feedback, analytics, and insights for each submission. Export reports in multiple formats.',
      icon: FaChartBar,
    },
  ];

  const bgSection = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box 
      as="section" 
      py={{ base: '16', md: '24' }} 
      bg={bgSection}
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
            <Stack spacing="4" maxW="3xl" mx="auto" textAlign="center">
              <Heading
                size={{ base: 'xl', md: '2xl' }}
                fontWeight="semibold"
                color={useColorModeValue('gray.900', 'white')}
              >
                How It Works
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Three simple steps to transform your grading process and save hours of manual work
              </Text>
            </Stack>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: '8', md: '10' }}
              pt="8"
              width="100%"
            >
              {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
              ))}
            </SimpleGrid>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}; 