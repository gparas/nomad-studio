import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useSWR from 'swr';
import { ProjectCard } from '../../components';
import fetcher from '../../lib/fetcher';
import { server } from '../../config/index';

const Projects = ({ data }) => {
  if (!data) return <Container>Loading...</Container>;
  return (
    <Box sx={{ py: [4, 24, 40] }}>
      <Container maxWidth="xl">
        <Grid container spacing={[4, 8, 20]}>
          {data.map((project) => {
            return (
              <Grid
                key={project.id}
                item
                xs={12}
                sm={6}
                sx={[
                  {
                    '&:nth-of-type(odd)': {
                      mt: [0, -14],
                    },
                  },
                ]}
              >
                <ProjectCard project={project} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(`${server}/api`);
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching homepage data', error);
  }
}

export default Projects;
