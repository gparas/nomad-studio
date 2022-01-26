import React from 'react';
import Head from 'next/head';
import Slider from '../components/Slider/Slider';
import glyfada from '../public/projects/glyfada/6.png';
import stefanos from '../public/projects/stefanos/1.png';

const slides = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: glyfada,
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: stefanos,
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: glyfada,
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: stefanos,
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>About - Nomad Studio</title>
      </Head>
      <Slider slides={slides} />
    </>
  );
};

export default About;
