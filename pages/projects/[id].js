import React from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { server } from '../../config/index';

const Project = ({ data }) => {
  const MotionTypography = motion(Typography);
  const MotionMedia = motion(CardMedia);

  if (!data) return <Container>Loading...</Container>;
  return (
    <AnimatePresence>
      <Box key={data.id} sx={{ py: 8 }}>
        <MotionTypography
          align="center"
          variant="h1"
          gutterBottom
          layoutId={`title-${data.id}`}
        >
          {data.title}
        </MotionTypography>
        <MotionMedia
          component="img"
          height="560"
          image={data.featured_media}
          alt={data.title}
          layoutId={`featured-media-${data.id}`}
        />
        <NextLink href="/projects">
          <a>back</a>
        </NextLink>
      </Box>
    </AnimatePresence>
  );
};

export async function getStaticProps({ params: { id } }) {
  try {
    const res = await fetch(`${server}/api/${id}`);
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching data', error);

    // Fallback to 404 page in case of error
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch(`${server}/api`);
    const data = await res.json();

    return {
      paths: data.map((item) => `/projects/${item.id}`),
      fallback: true,
    };
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export default Project;
