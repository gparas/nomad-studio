const PROJECTS = [
  {
    id: 0,
    title: 'Knit-Wit',
    path: '/not-humble',
    img: '/projects/glyfada/6.png',
  },
  {
    id: 1,
    title: 'Fiber',
    path: '/bleeping-easy',
    img: '/projects/stefanos/1.png',
  },
  {
    id: 2,
    title: 'Soft Edge',
    path: '/make-it-zero',
    img: '/projects/glyfada/6.png',
  },
  {
    id: 3,
    title: 'Dancing',
    path: '/it-takes-an-island',
    img: '/projects/stefanos/1.png',
  },
];

const SPRING = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
};

const VARIANTS = {
  default: (custom) => ({
    opacity: 0,
    x: custom.mouseXPosition,
    y: custom.mouseYPosition,
  }),
  project: (custom) => ({
    opacity: 1,
    height: 300,
    width: 300,
    x: custom.mouseXPosition - 32,
    y: custom.mouseYPosition - 32,
  }),
};

export default {
  PROJECTS,
  SPRING,
  VARIANTS,
};
