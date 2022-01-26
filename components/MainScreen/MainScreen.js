import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '../Section';
import mainScreen from '../../public/main-screen.png';

const MainScreen = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const MotionBox = motion(Box);
  return (
    <Section py={13}>
      <Typography
        variant="h1"
        mb={4}
        align="center"
        fontFamily="fontFamilySerif"
      >
        NOMAD STUDIO
      </Typography>
      <Typography variant="h5" component="div" align="center" mb={[13, 19]}>
        LANDSCAPE, INTERIOR & EXTERIOR
      </Typography>
      <MotionBox
        sx={{
          position: 'relative',
          width: ['80vw', '60vw', '40vw'],
          height: 600,
          margin: '0 auto',
        }}
        style={{ scale, opacity }}
      >
        <Image
          src={mainScreen}
          alt="main-screen"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </MotionBox>
    </Section>
  );
};

export default MainScreen;
