import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';

const ProjectHeader = ({ data }) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.section
        layoutId={`featured-media-${data.id}`}
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
          paddingTop: 128,
        }}
      >
        <Image
          alt={data.title}
          src={data.featured_media.src}
          placeholder="blur"
          blurDataURL={data.featured_media.blurDataURL}
          layout="fill"
          objectFit="cover"
          priority
        />
        <Container>
          <Button
            color="inherit"
            size="large"
            startIcon={<ArrowBack />}
            sx={{ textTransform: 'capitalize' }}
            onClick={() => router.push('/projects', '', { scroll: false })}
          >
            Back to projects
          </Button>
        </Container>
        <div
          style={{
            position: 'relative',
            flexGrow: 1,
            background:
              'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
            paddingBottom: 56,
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <Container>
            <Typography
              variant="h2"
              component="h1"
              color="inherit"
              fontWeight={600}
              sx={{ overflow: 'hidden' }}
            >
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                style={{ display: 'block' }}
                transition={{
                  ease: [0.45, 0.05, 0.55, 0.95],
                  duration: 0.64,
                  delay: 0.4,
                }}
              >
                {data.title}
              </motion.span>
            </Typography>
          </Container>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default ProjectHeader;
