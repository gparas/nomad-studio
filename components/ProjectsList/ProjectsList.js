import React, { useState, useRef } from 'react';
import NextLink from 'next/link';
import { Box, Container, Link, Divider } from 'theme-ui';
import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
import List from '../List';
import C from './constants';

const ProjectsList = () => {
  const [cursor, setCursor] = useState({
    img: '',
    variant: 'default',
  });

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const projectEnter = (img) => {
    setCursor({
      img,
      variant: 'project',
    });
  };

  const projectLeave = () => {
    setCursor({
      img: '',
      variant: 'default',
    });
  };

  return (
    <Box as="section" py={100} ref={ref}>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        variants={C.VARIANTS}
        animate={cursor.variant}
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
      <Container>
        <List>
          {C.PROJECTS.map((project) => {
            return (
              <motion.li
                key={project.id}
                onMouseEnter={() => projectEnter(project.img)}
                onMouseLeave={projectLeave}
              >
                <NextLink href={project.path} passHref>
                  <Link sx={{ fontSize: 8 }}>{project.title}</Link>
                </NextLink>
              </motion.li>
            );
          })}
        </List>
      </Container>
    </Box>
  );
};

export default ProjectsList;
