import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import pad from '../../lib/pad';
import Immersive from '../Immersive/Immersive';

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
      <Grid container mb={3}>
        <Grid item sm xs={12}>
          <Typography variant="button">project date: {data.date}</Typography>
          <Typography variant="button" ml={4}>
            size: {data.size} m<sup>2</sup>
          </Typography>
        </Grid>
        {data.immersive ? (
          <Grid item>
            <Immersive src={data.immersive} />
          </Grid>
        ) : null}
      </Grid>
      <motion.div layoutId={`featured-media-${data.id}`}>
        <Image
          alt={data.title}
          src={data.featured_media.src}
          layout="intrinsic"
          width={1488}
          height={837}
          priority
        />
      </motion.div>
    </section>
  );
};

export default ProjectHeader;
