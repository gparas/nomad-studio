import { useState } from 'react';
import { Flex, Box } from 'theme-ui';
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
  return (
    <Box
      as="section"
      ml={[4, 160]}
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
            alignItems: 'center',
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
                {route.title}
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
