import { styled } from '@mui/material/styles';
import MuiLink from '@mui/material/Link';

const Link = styled(MuiLink)(({ theme }) => ({
  ...theme.typography.button,
  position: 'relative',
  marginLeft: theme.spacing(2),
  '&:before': {
    content: '" "',
    position: 'absolute',
    width: '100%',
    height: 2,
    background: 'currentColor',
    top: '50%',
    left: 0,
    pointerEvents: 'none',
    transformOrigin: '100% 50%',
    transform: 'scale3d(0, 1, 1)',
    transition: 'transform 0.3s cubic-bezier(0.4, 1, 0.8, 1)',
  },
  '&.active, &:hover': {
    '&:before': {
      transformOrigin: '0% 50%',
      transform: 'scale3d(1, 1, 1)',
    },
  },
}));

export default Link;
