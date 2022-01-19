import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconComponents = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

const Footer = () => {
  const social = [
    {
      title: 'facebook',
      path: '/',
    },
    {
      title: 'instagram',
      path: '/',
    },
    {
      title: 'linkedin',
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
        <Grid container spacing={3} flexDirection="column">
          <Grid item>
            <Link color="inherit" href="#" variant="h6" underline="hover">
              info@nomadstudio.com
            </Link>
          </Grid>
          <Grid item>
            {social.map((item) => {
              const Icon = iconComponents[item.title];
              return (
                <IconButton key={item.title} color="inherit">
                  <Icon />
                </IconButton>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
