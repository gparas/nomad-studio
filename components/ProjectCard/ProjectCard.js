import React from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

const ProjectCard = ({ project }) => {
  const MotionTypography = motion(Typography);
  return (
    <Card elevation={0} square>
      <NextLink href={`/projects/${project.id}`} passHref scroll={false}>
        <CardActionArea aria-label={`view ${project.title}`}>
          <motion.div
            layoutId={`featured-media-${project.id}`}
            style={{
              position: 'relative',
              width: '100%',
              zIndex: 2,
            }}
          >
            <Image
              src={project.featured_media.src}
              alt={project.title}
              blurDataURL={project.featured_media.blurDataURL}
              placeholder="blur"
              layout="intrinsic"
              width={664}
              height={374}
            />
          </motion.div>
        </CardActionArea>
      </NextLink>
      <CardContent sx={{ px: 0 }}>
        <MotionTypography variant="h5" layoutId={`title-${project.id}`}>
          {project.title}
        </MotionTypography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
