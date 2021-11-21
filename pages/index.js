import { motion } from 'framer-motion';

const Home = () => {
  const container = {
    hidden: { y: 64 },
    show: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 64 },
    show: { y: 10 },
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.h2 variants={container} initial="hidden" animate="show">
        <div className="h-20 flex justify-end overflow-hidden">
          <motion.div
            variants={item}
            className="text-7xl font-bold text-outline"
          >
            ELEGANT
          </motion.div>
        </div>
        <div className="h-20 flex justify-end overflow-hidden">
          <motion.div variants={item} className="text-7xl font-bold font-serif">
            DIFFERENTIATING
          </motion.div>
        </div>
        <div className="h-20 flex justify-end overflow-hidden">
          <motion.div variants={item} className="text-7xl font-bold">
            DESIGN
          </motion.div>
        </div>
      </motion.h2>
    </section>
  );
};

export default Home;
