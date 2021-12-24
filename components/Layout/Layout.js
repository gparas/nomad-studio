import { useCycle } from 'framer-motion';
import Header from '../Header';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  const [isMenuOpen, toggleMenuOpen] = useCycle(false, true);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <Navigation isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
