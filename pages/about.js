import { Heading, Flex } from 'theme-ui';

const About = () => {
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
        About
      </Heading>
    </Flex>
  );
};

export default About;
