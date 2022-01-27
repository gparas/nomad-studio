import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import pad from '../../lib/pad';

const ProjectHeader = ({ data }) => {
  const MotionTypography = motion(Typography);
  return (
    <section>
      <Grid container mb={5}>
        <Grid item xs>
          <MotionTypography
            variant="h1"
            fontFamily="fontFamilySerif"
            layoutId={`title-${data.id}`}
            sx={{ textTransform: 'uppercase' }}
          >
            {data.title}
          </MotionTypography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="div" mt={1}>
            {pad(data.id)}
          </Typography>
        </Grid>
      </Grid>
      <Box mb={3}>
        <Typography variant="button">project date: {data.date}</Typography>
        <Typography variant="button" ml={4}>
          size: {data.size} m<sup>2</sup>
        </Typography>
      </Box>
      <motion.div layoutId={`featured-media-${data.id}`}>
        <Image
          alt={data.title}
          src={data.featured_media}
          layout="intrinsic"
          width={1488}
          height={837}
        />
      </motion.div>
    </section>
  );
};

export default ProjectHeader;
