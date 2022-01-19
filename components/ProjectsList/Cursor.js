import React from 'react';
import { motion } from 'framer-motion';
import C from './constants';

const Cursor = ({ cursor, mouseXPosition, mouseYPosition }) => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
      }}
      animate={cursor.variant}
      variants={C.VARIANTS}
      transition={C.SPRING}
      custom={{ mouseXPosition, mouseYPosition }}
    >
      <motion.img
        width="300"
        height="300"
        alt="foo"
        src={cursor.img}
        style={{ objectFit: 'cover' }}
      />
    </motion.div>
  );
};

export default Cursor;
