import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Section from '../Section';

const MainScreen = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const MotionMedia = motion(CardMedia);
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
      <Typography variant="h5" align="center" mb={[13, 19]}>
        LANDSCAPE, INTERIOR & EXTERIOR
      </Typography>
      <MotionMedia
        image="/main-screen.jpg"
        alt="main-screen"
        sx={{
          width: ['80vw', '40vw'],
          height: 600,
          margin: '0 auto',
        }}
        style={{ scale, opacity }}
      />
    </Section>
  );
};

export default MainScreen;
