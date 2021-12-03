import { Heading, Flex } from 'theme-ui';

const Contact = () => {
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
        Contact
      </Heading>
    </Flex>
  );
};

export default Contact;
