'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
  visavle: {
    x: [-20, 20, -20, 20, 0],
  },
  hover: { scale: 1.4, x: [-20, 20, -20, 20, 0] },
};

const HomePage = () => {
  return (
    <motion.main
      className='w-full h-[100dvh] flex justify-center items-center'
      initial={{ opacity: 0.1 }}
      animate={{ rotateZ: 360, opacity: 1, marginTop: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col gap-[25px] items-center'>
        <motion.h1
          className='text-[20px]'
          animate={{ fontSize: '50px', x: [100, 0], y: -20 }}
        >
          wellcome to main page
        </motion.h1>
        <Link href={'/base'}>
          <motion.button
            className='w-fit p-[25px] rounded-4xl flex items-center bg-[#2911a2] cursor-pointer'
            variants={buttonVariants}
            animate='visavle'
            whileHover='hover'
          >
            Choose a car brand
          </motion.button>
        </Link>
      </div>
    </motion.main>
  );
};

export default HomePage;
