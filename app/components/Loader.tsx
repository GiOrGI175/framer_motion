'use client';

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div
        className='w-16 h-16 border-4 border-t-transparent border-white rounded-full'
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1,
        }}
      />
    </div>
  );
};

export default Loader;
