import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { server } from '../../config';
import { ProjectCard } from '../../components';

const Projects = ({ projects }) => {
  return (
    <Box sx={{ py: [4, 24, 40] }}>
      <Container maxWidth="xl">
        <Grid container spacing={[4, 8, 20]}>
          {projects.map((project) => {
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
  const res = await fetch(`${server}/api`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}

export default Projects;