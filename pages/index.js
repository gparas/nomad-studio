import { motion } from 'framer-motion';

const variants = {
  initial: { y: 400 },
  animate: (i) => ({
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: i * 0.2,
    },
  }),
};

const Title = ({ item, custom }) => {
  const { title, className } = item;
  return (
    <div className="h-20 flex justify-end overflow-hidden">
      <motion.div
        className={className}
        variants={variants}
        initial="initial"
        animate="animate"
        custom={custom}
      >
        {title}
      </motion.div>
    </div>
  );
};

const titles = [
  {
    title: 'ELEGANT',
    className: 'text-7xl font-bold text-outline leading-tight',
  },
  {
    title: 'DIFFERENTIATING',
    className: 'text-7xl font-serif',
  },
  {
    title: 'DESIGN',
    className: 'text-7xl font-bold leading-tight',
  },
];

const Home = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <h2>
        {titles.map((item, i) => (
          <Title custom={i} key={item} item={item} />
        ))}
      </h2>
    </section>
  );
};

export default Home;
