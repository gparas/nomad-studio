import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextLink from 'next/link';
import { Link, Box } from 'theme-ui';
import C from './constants';

const Menu = ({ open }) => {
  const boxRef = useRef(null);
  const paperRef = useRef(null);
  const linkRef = useRef([]);

  useEffect(() => {
    if (open) {
      gsap
        .timeline()
        .to(boxRef.current, { duration: 0, css: { display: 'block' } })
        .to(paperRef.current, {
          duration: 0.8,
          height: '100%',
          ease: 'power3.inOut',
        })
        .to(linkRef.current, {
          duration: 0.8,
          y: 0,
          delay: 0.1,
          ease: 'expo.out',
          stagger: {
            amount: 0.3,
          },
          clearProps: 'transform',
        });
    } else if (!open) {
      gsap
        .timeline()
        .to(linkRef.current, {
          duration: 0.8,
          y: 200,
          ease: 'power3.inOut',
          stagger: {
            amount: 0.3,
          },
        })
        .to(paperRef.current, {
          duration: 0.8,
          height: 0,
          ease: 'power3.inOut',
        })
        .to(boxRef.current, { duration: 0, css: { display: 'none' } });
    }
  }, [open]);

  return (
    <Box
      ref={boxRef}
      sx={{
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 'drawer',
      }}
    >
      <Box
        ref={paperRef}
        sx={{
          px: 3,
          height: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'muted',
        }}
      >
        <Box as="ul">
          {C.LINKS.map((link, index) => (
            <Box
              key={link.label}
              as="li"
              sx={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                mb: 3,
              }}
            >
              <NextLink href={link.href} passHref>
                <Link
                  sx={{
                    fontSize: 8,
                    display: 'inline-block',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                  }}
                  ref={(el) => (linkRef.current[index] = el)}
                >
                  {link.label}
                </Link>
              </NextLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
