import Typography from '@mui/material/Typography';
import {
  ProjectsList,
  Section,
  MainScreen,
  MissionStatement,
} from '../components';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
