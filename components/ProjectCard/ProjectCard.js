import React from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

const ProjectCard = ({ project }) => {
  const MotionTypography = motion(Typography);
  const MotionMedia = motion(CardMedia);
  return (
    <Card elevation={0}>
      <NextLink href={`/projects/${project.id}`} passHref>
        <CardActionArea>
          <MotionMedia
            component="img"
            image={project.featured_media}
            alt={project.title}
            layoutId={`featured-media-${project.id}`}
            sx={{
              zIndex: 2,
              position: 'relative',
              height: [240, 272, 320, 400],
            }}
          />
          <CardContent>
            <MotionTypography variant="h5" layoutId={`title-${project.id}`}>
              {project.title}
            </MotionTypography>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
};

export default ProjectCard;
