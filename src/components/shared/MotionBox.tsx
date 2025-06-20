import { Box, type BoxProps } from '@chakra-ui/react';
import { motion, type MotionProps } from 'framer-motion';

export const MotionBox = motion(Box);

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export type MotionBoxProps = BoxProps & MotionProps; 