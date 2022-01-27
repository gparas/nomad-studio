import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { getCol, getHeight } from './utils';

const ProjectBody = ({ data }) => {
  const MotionBox = motion(Box);
  return (
    <Box as="section" sx={{ py: 12 }}>
      <Grid container spacing={12} justifyContent="space-between">
        {Object.keys(data).map((key) => {
          return (
            <Grid key={key} item sm={getCol(key)}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: [0.45, 0.05, 0.55, 0.95],
                  duration: 0.64,
                }}
                sx={{ position: 'relative', height: getHeight(key) }}
              >
                <Image src={data[key]} layout="fill" objectFit="cover" />
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectBody;
