import React from 'react';
import { motion } from 'framer-motion';
import { slideMargin, slideSize, variants } from './constants';

const Slide = ({ current, index, ...other }) => {
  return (
    <motion.div
      style={{
        flex: 1,
        // margin: `0 ${slideMargin}`,
        position: 'relative',
        height: slideSize,
        width: slideSize,
        zIndex: 1,
      }}
      variants={variants}
      initial="initial"
      animate={current === index ? 'animate' : 'initial'}
      transition={{
        opacity: { duration: 0.2 },
      }}
      {...other}
    />
  );
};

export default Slide;
