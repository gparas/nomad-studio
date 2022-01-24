import React from 'react';
import { motion } from 'framer-motion';
import { slideMargin, swipeConfidenceThreshold } from './constants';
import { swipePower } from './utils';

const SliderWrapper = ({
  current,
  slidesLength,
  handleNext,
  handlePrev,
  ...other
}) => {
  return (
    <motion.div
      style={{
        display: 'flex',
        margin: `0 calc(${slideMargin} * -1)`,
        position: 'absolute',
      }}
      initial={false}
      animate={{ x: `-${current * (100 / slidesLength)}%` }}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          handleNext();
        } else if (swipe > swipeConfidenceThreshold) {
          handlePrev();
        }
      }}
      {...other}
    />
  );
};

export default SliderWrapper;
