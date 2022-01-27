import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Background = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ['#fff', '#000', '#000', '#fff'],
  );
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#000', '#fff', '#000'],
  );
  const transition = { duration: 0.1 };
  return (
    <motion.div style={{ background, color }} transition={transition}>
      {children}
    </motion.div>
  );
};

export default Background;
