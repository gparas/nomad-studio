import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ProjectBody = ({ data }) => {
  const MotionBox = motion(Box);
  if (!data) return null;
  return (
    <Box as="section" sx={{ py: 12 }}>
      <Grid container spacing={12} justifyContent="space-between">
        {data.map((item, index) => {
          const col = index === 0 ? 3 : index === 3 ? 12 : index === 4 ? 3 : 7;
          const height =
            index === 0 ? 320 : index === 3 ? 512 : index === 4 ? 320 : 480;
          return (
            <Grid key={index} item sm={col}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: [0.45, 0.05, 0.55, 0.95],
                  duration: 0.64,
                }}
                sx={{ position: 'relative', height }}
              >
                <Image src={item} layout="fill" objectFit="cover" />
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectBody;
