import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import Title from './Title';
import Subtitle from './Subtitle';

const MissionStatement = () => {
  const MotionSection = motion(Section);

  return (
    <MotionSection
      onViewportEnter={() => {
        document.getElementById('main').style.backgroundColor = '#000';
        document.getElementById('main').style.color = '#fff';
      }}
      onViewportLeave={() => {
        document.getElementById('main').style.backgroundColor = '#fff';
        document.getElementById('main').style.color = '#000';
      }}
    >
      <Title />
      <Subtitle />
    </MotionSection>
  );
};

export default MissionStatement;
