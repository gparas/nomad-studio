import Head from 'next/head';
import Typography from '@mui/material/Typography';
import {
  ProjectsList,
  Section,
  MainScreen,
  MissionStatement,
  Background,
} from '../components';

const Home = () => {
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
          <ProjectsList />
        </Section>
      </Background>
    </>
  );
};

export default Home;
