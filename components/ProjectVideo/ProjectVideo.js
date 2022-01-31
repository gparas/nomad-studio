import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';

const ProjectVideo = ({ video }) => {
  const videoRef = useRef(null);
  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();
  if (!video) return null;
  return (
    <Box as="section" sx={{ mb: [12, 20] }}>
      <motion.video
        ref={videoRef}
        playsInline
        loop
        autoPlay
        muted
        width={'100%'}
        height={'auto'}
        onViewportEnter={playVideo}
        onViewportLeave={pauseVideo}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </motion.video>
    </Box>
  );
};

export default ProjectVideo;
