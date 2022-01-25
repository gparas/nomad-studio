import React, { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { server } from '../../config';

const Project = ({ project }) => {
  const MotionTypography = motion(Typography);
  const MotionMedia = motion(CardMedia);
  return (
    <AnimatePresence>
      <Box key={project.id} sx={{ py: 8 }}>
        <MotionTypography
          align="center"
          variant="h1"
          gutterBottom
          layoutId={`title-${project.id}`}
        >
          {project.title}
        </MotionTypography>
        <MotionMedia
          component="img"
          height="560"
          image={project.featured_media}
          alt={project.title}
          layoutId={`featured-media-${project.id}`}
        />
        <NextLink href="/projects">
          <a>back</a>
        </NextLink>
      </Box>
    </AnimatePresence>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${server}/api/${id}`);
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
}

export default Project;
