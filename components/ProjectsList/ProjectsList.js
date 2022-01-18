import React, { useState, useRef, Fragment } from 'react';
import useMouse from '@react-hook/mouse-position';
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
  const [cursor, setCursor] = useState({
    id: '',
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

  const projectEnter = (project) => {
    setCursor({
      id: project.id,
      img: project.img,
      variant: 'project',
    });
  };

  const projectLeave = () => {
    setCursor({
      id: '',
      img: '',
      variant: 'default',
    });
  };

  return (
    <div ref={ref}>
      <Cursor
        cursor={cursor}
        mouseXPosition={mouseXPosition}
        mouseYPosition={mouseYPosition}
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
    </div>
  );
};

export default ProjectsList;
