import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Link from './Link';
import C from './constants';

const Header = () => {
  const trigger = useScrollTrigger();
  const router = useRouter();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        elevation={0}
        color="inherit"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
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
      </AppBar>
    </Slide>
  );
};

export default Header;
