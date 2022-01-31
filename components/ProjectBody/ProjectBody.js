import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Remaining from './Remaining';
import Gallery from './Gallery';

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const content = data.content;
  const size = 4;
  const remaining = Object.keys(content).slice(size).length;
  const items = Object.keys(content).slice(0, size);
  const lastItem = items[items.length - 1];
  return (
    <Box as="section" sx={{ pb: 20 }}>
      <Container>
        <ImageList gap={3}>
          {Object.keys(content)
            .slice(0, size)
            .map((key, i) => {
              const { src } = content[key];
              return (
                <ImageListItem
                  key={key}
                  component={motion.li}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  transition={{
                    ease: [0.45, 0.05, 0.55, 0.95],
                    duration: 0.64,
                  }}
                >
                  <Box sx={{ position: 'relative', height: [160, 240, 360] }}>
                    <Remaining
                      remaining={remaining}
                      lastItem={lastItem === key}
                      onClick={handleOpen}
                    />
                    <Image
                      src={src}
                      alt={data.title}
                      layout="fill"
                      objectFit="cover"
                      blurDataURL={data.featured_media.blurDataURL}
                      placeholder="blur"
                    />
                  </Box>
                </ImageListItem>
              );
            })}
        </ImageList>
      </Container>
      <Gallery
        open={open}
        onClose={handleClose}
        images={Object.values(content)}
      />
    </Box>
  );
};

export default ProjectBody;
