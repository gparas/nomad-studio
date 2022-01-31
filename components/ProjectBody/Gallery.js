import React from 'react';
import Dialog from '@mui/material/Dialog';
import ImageGallery from '../ImageGallery';
import CloseDialog from '../CloseDialog';

const Gallery = ({ open, onClose, images }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      aria-labelledby="image gallery"
    >
      <CloseDialog onClick={onClose} />
      <ImageGallery images={images} />
    </Dialog>
  );
};

export default Gallery;
