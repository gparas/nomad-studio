import { Heading, Flex } from 'theme-ui';

const Projects = () => {
  return (
    <Flex
      as="section"
      sx={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Heading variant="h1" component="h1">
        Projects
      </Heading>
    </Flex>
  );
};

export default Projects;
