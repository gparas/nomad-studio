import { useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { ProjectsList } from '../components';

const Home = () => {
  const MotionImage = motion(CardMedia);
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
      <Box component="section" pt={13}>
        <Container>
          <Typography variant="h1" mb={4} align="center">
            NOMAD STUDIO
          </Typography>
          <Typography variant="subtitle1" align="center" mb={19}>
            LANDSCAPE, INTERIOR & EXTERIOR
          </Typography>
          <MotionImage
            src="/main-screen.jpg"
            alt="main-screen"
            component="img"
            height={723}
            sx={{ width: '40vw', margin: '0 auto' }}
            style={{ scale, opacity }}
          />
        </Container>
      </Box>
      <Box component="section">
        <Container>
          <Box sx={{ width: '30%', display: 'inline-block' }} />
          <Typography
            variant="h2"
            sx={{
              display: 'inline',
            }}
          >
            We create architectural experiences — informed by tradition and
            inspired by contemporary life.
          </Typography>
        </Container>
      </Box>
      <ProjectsList />
    </>
  );
};

export default Home;
