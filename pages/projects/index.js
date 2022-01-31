import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ProjectCard } from '../../components';
import server from '../../lib/server';

const Projects = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (!data) return <Container>Loading...</Container>;
  return (
    <Box as="section" sx={{ pt: [8, 16], pb: [12, 24] }}>
      <Head>
        <title>Projects - Nomad Studio</title>
      </Head>
      <Container maxWidth="xl">
        <Typography variant="h1" fontFamily="fontFamilySerif" mb={4}>
          PROJECTS
        </Typography>
      </Container>
      <ImageList gap={3}>
        {data.map((project) => {
          return (
            <ImageListItem key={project.id} cols={isMobile ? 2 : 1}>
              <ProjectCard project={project} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(`${server}/api`);
    const data = await res.json();

    return {
      props: { data },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export default Projects;
