import { Heading, Flex } from 'theme-ui';

const Home = () => {
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
        Home
      </Heading>
    </Flex>
  );
};

export default Home;
