'use client';

import { motion } from 'framer-motion';

const loaderVariant = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 0.25,
      },
    },
  },
};

const CycleLoader = () => {
  return (
    <motion.div
      className='w-[10px] h-[10px] my-[40px] mx-auto rounded-full bg-[white] '
      variants={loaderVariant}
      animate='animationOne'
    ></motion.div>
  );
};

export default CycleLoader;
