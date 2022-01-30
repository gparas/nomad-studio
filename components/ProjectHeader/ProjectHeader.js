import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ProjectHeader = ({ data }) => {
  return (
    <AnimatePresence>
      <motion.section
        layoutId={`featured-media-${data.id}`}
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
        }}
      >
        <Image
          alt={data.title}
          src={data.featured_media.src}
          placeholder="blur"
          blurDataURL={data.featured_media.blurDataURL}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div
          style={{
            position: 'relative',
            marginTop: 'auto',
            background:
              'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
            paddingBottom: 56,
          }}
        >
          <Container>
            <Typography
              variant="h2"
              component="h1"
              color="inherit"
              fontWeight="fontWeightMedium"
              sx={{ overflow: 'hidden' }}
            >
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                style={{ display: 'block' }}
                transition={{
                  ease: [0.45, 0.05, 0.55, 0.95],
                  duration: 0.64,
                  delay: 0.4,
                }}
              >
                {data.title}
              </motion.span>
            </Typography>
          </Container>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default ProjectHeader;
