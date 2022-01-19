import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Subtitle = () => {
  const MotionDivider = motion(Divider);
  const MotionTypography = motion(Typography);
  return (
    <Grid container spacing={8}>
      <Grid item md={6} xs={12}>
        <MotionDivider
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <MotionTypography
          mt={-1}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          Our contextual approach produces unique and immersive experiences
          through Architecture, Interior and Landscape Design
        </MotionTypography>
      </Grid>
    </Grid>
  );
};

export default Subtitle;
