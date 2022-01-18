import { useCycle } from 'framer-motion';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  const [isMenuOpen, toggleMenuOpen] = useCycle(false, true);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <Navigation isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <Box
        as="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
