import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const ProjectCard = ({ project }) => {
  const router = useRouter();
  return (
    <CardActionArea
      aria-label={`view ${project.title}`}
      onClick={() =>
        router.push(`/projects/${project.id}`, '', {
          scroll: false,
        })
      }
    >
      <Box
        component={motion.div}
        layoutId={`featured-media-${project.id}`}
        sx={{
          position: 'relative',
          height: [240, 320, 480],
        }}
      >
        <Image
          src={project.featured_media.src}
          alt={project.title}
          blurDataURL={project.featured_media.blurDataURL}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <ImageListItemBar
        sx={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
        title={
          <Typography variant="h5" fontWeight={600}>
            {project.title}
          </Typography>
        }
      />
    </CardActionArea>
  );
};

export default ProjectCard;
