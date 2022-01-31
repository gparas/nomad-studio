import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import Navigation from './Navigation';

const ImageGallery = ({ images }) => {
  const swiperRef = useRef(null);
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Swiper
        ref={swiperRef}
        loop
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard]}
        style={{ width: '100vw', height: '100vh' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt="image-gallery"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Navigation
        onClick={() => swiperRef.current.swiper.slidePrev()}
        direction="left"
      />
      <Navigation
        onClick={() => swiperRef.current.swiper.slideNext()}
        direction="right"
      />
    </Box>
  );
};

export default ImageGallery;
