import Head from 'next/head';
import Typography from '@mui/material/Typography';
import server from '../lib/server';
import {
  ProjectsList,
  Section,
  MainScreen,
  MissionStatement,
  Background,
} from '../components';

const Home = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Nomad Studio - Landscape, Interior & Exterior</title>
      </Head>
      <Background>
        <MainScreen />
        <MissionStatement />
        <Section py={25}>
          <Typography
            fontFamily="fontFamilySerif"
            variant="h1"
            align="center"
            mb={8}
          >
            Selected Work
          </Typography>
          <ProjectsList projects={projects} />
        </Section>
      </Background>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(`${server}/api`);
    const projects = await res.json();

    return {
      props: { projects },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export default Home;
