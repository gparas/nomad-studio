import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const social = [
    {
      title: 'Facebook',
      icon: FacebookIcon,
      path: '/',
    },
    {
      title: 'Instagram',
      icon: InstagramIcon,
      path: '/',
    },
    {
      title: 'LinkedIn',
      icon: LinkedInIcon,
      path: '/',
    },
  ];
  return (
    <Box
      as="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        zIndex: -1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h1" mb={20} fontFamily="fontFamilySerif">
          LETS WORK
          <br />
          TOGETHER
        </Typography>
        <Link color="inherit" href="#" variant="h6" underline="hover">
          info@nomadstudio.com
        </Link>
        {social.map((item) => (
          <IconButton key={item.title}>
            <item.icon />
          </IconButton>
        ))}
      </Container>
    </Box>
  );
};

export default Footer;
