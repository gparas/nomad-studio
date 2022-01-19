import { useCycle } from 'framer-motion';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [isMenuOpen, toggleMenuOpen] = useCycle(false, true);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <Navigation isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <Box
        as="main"
        id="main"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
          backgroundColor: '#fff',
          marginBottom: '100vh',
          transition: 'all 500ms linear',
        }}
      >
        <Toolbar />
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
