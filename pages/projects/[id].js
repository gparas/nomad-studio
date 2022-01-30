import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from '@mui/material/Container';
import server from '../../lib/server';
import { ProjectHeader, ProjectBody, ProjectDetails } from '../../components';

const Project = ({ data }) => {
  if (!data) return <Container>Loading...</Container>;
  return (
    <article key={data.id}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <ProjectHeader data={data} />
      <ProjectDetails data={data} />
      <Container maxWidth="xl">
        <ProjectBody data={data} />
        <Link href={`/projects/${+data.id + 1}`}>
          <a>Next project</a>
        </Link>
      </Container>
    </article>
  );
};

export async function getStaticProps({ params: { id } }) {
  try {
    const res = await fetch(`${server}/api/${id}`);
    const data = await res.json();

    if (!data) {
      return {
        redirect: {
          destination: '/projects/1',
          permanent: false,
        },
      };
    }

    return {
      props: {
        data,
      },
      revalidate: 60,
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

    const paths = data.map(({ id }) => ({
      params: { id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export default Project;
