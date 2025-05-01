'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CycleLoader from './CycleLoader';

const HomePage = () => {
  return (
    <motion.main
      className='w-full h-[100dvh] flex justify-center items-center'
      initial={{ opacity: 0.1 }}
      animate={{ rotateZ: 360, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-fit flex flex-col gap-[25px] items-center'>
        <motion.h1
          className='text-[20px]'
          animate={{ fontSize: '50px', x: [100, 0], y: -20 }}
        >
          wellcome to main page
        </motion.h1>
        <Link href='/base'>
          <motion.button
            className='w-fit p-[25px] rounded-4xl flex items-center bg-[#2911a2] cursor-pointer'
            variants={{ visible: { x: [-20, 20, -20, 20, 0] } }}
            animate='visible'
            whileHover={{
              scale: 1.4,
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 0.6,
              },
            }}
          >
            Choose a car brand
          </motion.button>
        </Link>

        <>
          <CycleLoader />
          <p className='text-[20px]'>Cycle Loader </p>
        </>
      </div>
    </motion.main>
  );
};

export default HomePage;
