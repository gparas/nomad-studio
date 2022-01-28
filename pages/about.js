import React from 'react';
import Head from 'next/head';
import Slider from '../components/Slider/Slider';
import glyfada from '../public/projects/glyfada/img1.png';
import stefanos from '../public/projects/stefanos/1.png';
import { Immersive } from '../components';

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
      <Immersive src="https://api2.enscape3d.com/v3/view/33b72d74-33ce-42de-9108-48d70d6c40c4" />
    </>
  );
};

export default About;
