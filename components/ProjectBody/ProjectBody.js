import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Remaining from './Remaining';

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const ProjectBody = ({ data }) => {
  const content = data.content;
  const size = 4;
  const remaining = Object.keys(content).slice(size).length;
  const items = Object.keys(content).slice(0, size);
  const lastItem = items[items.length - 1];
  return (
    <Box as="section" sx={{ pb: 20 }}>
      <Container>
        <Grid container spacing={0.5}>
          {Object.keys(content)
            .slice(0, size)
            .map((key, i) => {
              const { src } = content[key];
              return (
                <Grid key={key} item sm={6} xs={12}>
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    style={{ position: 'relative', height: 400 }}
                    transition={{
                      ease: [0.45, 0.05, 0.55, 0.95],
                      duration: 0.64,
                    }}
                  >
                    <Remaining
                      remaining={remaining}
                      lastItem={lastItem === key}
                    />
                    <Image
                      src={src}
                      layout="fill"
                      objectFit="cover"
                      blurDataURL={data.featured_media.blurDataURL}
                      placeholder="blur"
                    />
                  </motion.div>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectBody;
