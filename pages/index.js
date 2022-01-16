import { Heading, Box, Container, Text, Flex } from 'theme-ui';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ProjectsList } from '../components';

const Home = () => {
  const MotionBox = motion(Box);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.08]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ['#fff', '#000'],
  );
  return (
    <>
      <MotionBox as="section" pt={104} pb={104} style={{ backgroundColor }}>
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
              width={595}
              height={723}
              src="/projects/stefanos/1.png"
              alt="main-screen"
              style={{ scale, opacity, objectFit: 'cover' }}
            />
          </Flex>
        </Container>
      </MotionBox>
      <Box as="section" pb={188} sx={{ backgroundColor: '#000' }}>
        <Container>
          <Heading
            as="h2"
            sx={{
              fontSize: [7, 9],
              fontFamily: 'serif',
              fontWeight: 400,
              textAlign: 'center',
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
