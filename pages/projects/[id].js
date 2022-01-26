import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import server from '../../lib/server';

const Project = ({ data }) => {
  const MotionTypography = motion(Typography);

  if (!data) return <Container>Loading...</Container>;
  return (
    <AnimatePresence>
      <Box as="article" key={data.id} sx={{ py: 8 }}>
        <Head>
          <title>{data.title}</title>
        </Head>
        <Container maxWidth="xl">
          <MotionTypography
            align="center"
            variant="h1"
            gutterBottom
            layoutId={`title-${data.id}`}
          >
            {data.title}
          </MotionTypography>
          <motion.div
            layoutId={`featured-media-${data.id}`}
            style={{ position: 'relative', width: '100%', height: 560 }}
          >
            <Image
              alt={data.title}
              src={data.featured_media.src}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <NextLink href="/projects">
            <a>back</a>
          </NextLink>
        </Container>
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
