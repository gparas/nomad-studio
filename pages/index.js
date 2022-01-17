import { useEffect } from 'react';
import { Heading, Box, Container, Text, Flex } from 'theme-ui';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ProjectsList } from '../components';

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  const listenScrollEvent = () => {
    if (window.scrollY > 400) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <Box as="section" pt={104}>
        <Container>
          <Heading
            as="h1"
            mb={4}
            sx={{
              fontSize: 10,
              fontFamily: 'serif',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            NOMAD STUDIO
          </Heading>
          <Text
            as="p"
            sx={{
              fontSize: 4,
              textAlign: 'center',
              mb: 152,
              letterSpacing: 1,
            }}
          >
            LANDSCAPE, INTERIOR & EXTERIOR
          </Text>
          <Flex sx={{ justifyContent: 'center' }}>
            <motion.img
              height={723}
              src="/main-screen.jpg"
              alt="main-screen"
              style={{
                scale,
                opacity,
                width: '40vw',
                objectFit: 'cover',
              }}
            />
          </Flex>
        </Container>
      </Box>
      <Box as="section">
        <Container>
          <Box sx={{ width: '30%', display: 'inline-block' }} />
          <Heading
            as="h2"
            sx={{
              display: 'inline',
              fontSize: [7, 9],
              fontFamily: 'serif',
              fontWeight: 400,
              color: '#fff',
            }}
          >
            We create architectural experiences — informed by tradition and
            inspired by contemporary life.
          </Heading>
        </Container>
      </Box>
      <ProjectsList />
    </>
  );
};

export default Home;
