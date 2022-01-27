import { useCycle, AnimateSharedLayout } from 'framer-motion';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [isMenuOpen, toggleMenuOpen] = useCycle(false, true);
  return (
    <AnimateSharedLayout>
      <Header isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <Navigation isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <main
        id="main"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
          backgroundColor: '#fff',
          marginBottom: '100vh',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Toolbar />
        {children}
      </main>
      <Footer />
    </AnimateSharedLayout>
  );
};

export default Layout;
