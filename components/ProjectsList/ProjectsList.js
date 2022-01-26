import React, { useState, Fragment, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import NextLink from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Cursor from './Cursor';
import C from './constants';
import U from './utils';

const ProjectsList = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursor, setCursor] = useState({
    id: '',
    img: '',
  });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const projectEnter = (project) => {
    setCursor({
      id: project.id,
      img: project.img,
    });
  };

  const projectLeave = () => {
    setCursor({
      id: '',
      img: '',
    });
  };

  return (
    <>
      <Cursor
        cursor={cursor}
        mouseXPosition={cursorX}
        mouseYPosition={cursorY}
      />
      <List component="nav">
        {C.PROJECTS.map((project, i) => {
          return (
            <Fragment key={project.id}>
              <ListItem component="div" disableGutters>
                <NextLink href={project.path} passHref>
                  <ListItemButton
                    component="a"
                    onMouseEnter={() => projectEnter(project)}
                    onMouseLeave={projectLeave}
                    aria-label={`view ${project.title}`}
                  >
                    <ListItemText
                      primary={`${U.pad(i + 1)}. ${project.title}`}
                      primaryTypographyProps={{ variant: 'h3' }}
                    />
                  </ListItemButton>
                </NextLink>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </>
  );
};

export default ProjectsList;
