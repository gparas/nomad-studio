import React, { useState, Fragment, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import NextLink from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Cursor from './Cursor';
import pad from '../../lib/pad';

const ProjectsList = ({ projects }) => {
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
      img: project.featured_media,
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
        {projects.map((project) => {
          return (
            <Fragment key={project.id}>
              <ListItem component="div" disableGutters>
                <NextLink href={`/projects/${project.id}`} passHref>
                  <ListItemButton
                    component="a"
                    onMouseEnter={() => projectEnter(project)}
                    onMouseLeave={projectLeave}
                    aria-label={`view ${project.title}`}
                  >
                    <ListItemText
                      primary={`${pad(+project.id)}. ${project.title}`}
                      primaryTypographyProps={{ variant: 'h4' }}
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
