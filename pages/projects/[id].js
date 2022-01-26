import React from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import server from '../../lib/server';
import { ProjectHeader, ProjectBody } from '../../components';

const Project = ({ data }) => {
  if (!data) return <Container>Loading...</Container>;
  return (
    <AnimatePresence>
      <Box as="article" key={data.id} sx={{ py: 8 }}>
        <Head>
          <title>{data.title}</title>
        </Head>
        <Container maxWidth="xl">
          <ProjectHeader data={data} />
          <ProjectBody data={data.content} />
          <NextLink href={`/projects/${+data.id + 1}`}>
            <a>Next Project</a>
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

    const paths = data.map((project) => ({
      params: { id: project.id },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export default Project;
