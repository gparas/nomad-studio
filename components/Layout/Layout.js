import { useCycle } from 'framer-motion';
import { Box } from 'theme-ui';
import Header from '../Header';
import Toolbar from '../Toolbar';
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
          height: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
