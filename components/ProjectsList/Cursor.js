import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = ({ cursor, mouseXPosition, mouseYPosition }) => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        translateX: mouseXPosition,
        translateY: mouseYPosition,
      }}
    >
      <AnimatePresence>
        {cursor.img && (
          <motion.img
            width="300"
            height="300"
            alt="cursor"
            src={cursor.img}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cursor;
