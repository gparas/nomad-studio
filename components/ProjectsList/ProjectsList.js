import React, { useState, useRef } from 'react';
import NextLink from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
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
    <Box as="section" py={13} ref={ref}>
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
        <List component="nav">
          {C.PROJECTS.map((project) => {
            return (
              <ListItem key={project.id} component="div" disableGutters>
                <NextLink href={project.path} passHref>
                  <ListItemButton
                    component="a"
                    onMouseEnter={() => projectEnter(project.img)}
                    onMouseLeave={projectLeave}
                  >
                    <ListItemText
                      primary={project.title}
                      primaryTypographyProps={{ variant: 'h3' }}
                    />
                  </ListItemButton>
                </NextLink>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Box>
  );
};

export default ProjectsList;
