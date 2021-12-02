import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Projects = () => {
  return (
    <Box
      component="section"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1" component="h1">
        Projects
      </Typography>
    </Box>
  );
};

export default Projects;
