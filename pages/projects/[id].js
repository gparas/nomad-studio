import React from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import NextLink from 'next/link';
import useSWR from 'swr';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fetcher from '../../lib/fetcher';

const Project = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(() => query.id && `/api/${query.id}`, fetcher);
  const MotionTypography = motion(Typography);
  const MotionMedia = motion(CardMedia);

  if (error) return <Container>{error.message}</Container>;
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

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const res = await fetch(`${server}/api/${id}`);
//   const project = await res.json();

//   return {
//     props: {
//       project,
//     },
//   };
// }

export default Project;
