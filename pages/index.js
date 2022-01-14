import { useState } from 'react';
import NextLink from 'next/link';
import { Flex, Box, Link, Divider } from 'theme-ui';
import { motion, AnimatePresence } from 'framer-motion';
import { List } from '../components';
const navRoutes = [
  {
    id: 0,
    title: 'Knit-Wit',
    path: '/not-humble',
    video: 'make-it-zero.mp4',
  },
  {
    id: 1,
    title: 'Fiber',
    path: '/bleeping-easy',
    video: 'easy.mp4',
  },
  {
    id: 2,
    title: 'Soft Edge',
    path: '/make-it-zero',
    video: 'make-it-zero.mp4',
  },
  {
    id: 3,
    title: 'Dancing',
    path: '/it-takes-an-island',
    video: 'easy.mp4',
  },
];
const Home = () => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: '',
    key: '0',
  });
  const [linkHover, setLinkHover] = useState(false);
  return (
    <Box
      as="section"
      ml={[4, 144]}
      py={48}
      sx={{
        display: 'flex',
        flexBasis: 0,
        flexGrow: 1,
      }}
    >
      <Flex
        sx={{
          flexBasis: 0,
          flexGrow: 1,
        }}
      >
        <Flex
          sx={{
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: '100%',
          }}
        >
          <List>
            {navRoutes.map((route) => (
              <motion.li
                key={route.id}
                onHoverStart={() =>
                  setRevealVideo({
                    show: true,
                    video: route.video,
                    key: route.id,
                  })
                }
                onHoverEnd={() =>
                  setRevealVideo({
                    show: false,
                    video: route.video,
                    key: route.id,
                  })
                }
              >
                <NextLink href={route.path} passHref>
                  <Link sx={{ fontSize: 6 }}>
                    {route.title}{' '}
                    <Box sx={{ width: 80, height: 2, bg: 'currentcolor' }} />
                  </Link>
                </NextLink>
              </motion.li>
            ))}
          </List>
        </Flex>
        <Box
          sx={{
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: '100%',
          }}
        >
          <AnimatePresence initial={false} exitBeforeEnter>
            {revealVideo.show && (
              <motion.video
                key={revealVideo.key}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                loop
                autoPlay
              >
                <source src={`/video/${revealVideo.video}`} type="video/mp4" />
              </motion.video>
            )}
          </AnimatePresence>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
