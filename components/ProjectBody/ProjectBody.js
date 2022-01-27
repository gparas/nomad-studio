import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { getCol } from './utils';

const ProjectBody = ({ data }) => {
  return (
    <Box as="section" sx={{ py: [4, 8, 12] }}>
      <Grid
        container
        spacing={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="space-between"
      >
        {Object.keys(data).map((key) => {
          return (
            <Grid key={key} item sm={getCol(key)} xs={12}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: [0.45, 0.05, 0.55, 0.95],
                  duration: 0.64,
                }}
              >
                <Image
                  src={data[key]}
                  layout="intrinsic"
                  width={1488}
                  height={837}
                />
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectBody;
