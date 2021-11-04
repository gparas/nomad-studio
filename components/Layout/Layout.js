import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={router.pathname}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Layout;
