import React, { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import SliderWrapper from './SliderWrapper';
import Slide from './Slide';
import { slideSize } from './constants';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    const previous = current - 1;

    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNext = () => {
    const next = current + 1;

    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };
  return (
    <div
      style={{
        margin: '0 auto',
        position: 'relative',
        width: slideSize,
        height: slideSize,
      }}
    >
      <SliderWrapper
        current={current}
        slidesLength={slides.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
      >
        {slides.map(({ src, headline }, index) => (
          <Slide
            key={index}
            onClick={() => handleSlideClick(index)}
            current={current}
            index={index}
          >
            <CardMedia
              alt={headline}
              image={src}
              sx={{ width: '100%', height: '100%' }}
            />
          </Slide>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default Slider;
