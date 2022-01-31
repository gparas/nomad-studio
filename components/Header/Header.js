import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from './Link';
import C from './constants';

const Header = () => {
  const router = useRouter();
  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="absolute"
      // sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <NextLink href="/" passHref>
            <Typography
              component="a"
              variant="h6"
              color="inherit"
              sx={{ flexGrow: 1 }}
            >
              NOMAD STUDIO
            </Typography>
          </NextLink>
          {C.LINKS.map((link) => (
            <NextLink href={link.href} passHref key={link.label}>
              <Link
                component="a"
                color="inherit"
                className={router.pathname.includes(link.href) ? 'active' : ''}
              >
                {link.label}
              </Link>
            </NextLink>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
