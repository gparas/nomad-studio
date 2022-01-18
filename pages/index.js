import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ProjectsList, Section } from '../components';

const Home = () => {
  const [inView, setInView] = useState(false);
  const MotionMedia = motion(CardMedia);
  const MotionDivider = motion(Divider);
  const MotionTypography = motion(Typography);
  const MotionSection = motion(Section);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  useEffect(() => {
    if (inView) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  }, [inView]);

  console.log(inView);
  return (
    <>
      <Section py={13}>
        <Typography
          variant="h1"
          mb={4}
          align="center"
          fontFamily="fontFamilySerif"
        >
          NOMAD STUDIO
        </Typography>
        <Typography variant="h5" align="center" mb={[13, 19]}>
          LANDSCAPE, INTERIOR & EXTERIOR
        </Typography>
        <MotionMedia
          image="/main-screen.jpg"
          alt="main-screen"
          sx={{
            width: ['80vw', '40vw'],
            height: 600,
            margin: '0 auto',
          }}
          style={{ scale, opacity }}
        />
      </Section>
      <MotionSection
        mb={[8, 15]}
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
      >
        <div style={{ width: '30%', display: 'inline-block' }} />
        <Typography
          variant="h2"
          fontFamily="fontFamilySerif"
          sx={{
            display: 'inline',
          }}
        >
          We create architectural experiences — informed by tradition and
          inspired by contemporary life.
        </Typography>
      </MotionSection>
      <Section>
        <Grid container spacing={8}>
          <Grid item md={6} xs={12}>
            <MotionDivider
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              style={{ originX: 0 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <MotionTypography
              mt={-1}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
            >
              Our contextual approach produces unique and immersive experiences
              through Architecture, Interior and Landscape Design
            </MotionTypography>
          </Grid>
        </Grid>
      </Section>
      <Section py={19}>
        <Typography
          fontFamily="fontFamilySerif"
          variant="h1"
          align="center"
          mb={8}
        >
          Selected Work
        </Typography>
        <ProjectsList />
      </Section>
    </>
  );
};

export default Home;
