import React, { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const Immersive = ({ src }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseEnter = () => {
    ref.current.focus();
  };

  return (
    <>
      <Button onClick={handleOpen} color="inherit" startIcon={<ViewInArIcon />}>
        Immersive view
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { backgroundColor: '#000', color: '#fff' },
        }}
      >
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ ml: 'auto' }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <iframe
          ref={ref}
          onMouseEnter={handleMouseEnter}
          src={src}
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
        />
      </Dialog>
    </>
  );
};

export default Immersive;
