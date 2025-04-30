'use client';

import { animate, motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center'>
      <motion.div
        className='max-w-[1280px] w-full flex justify-between border-b-[2px] border-[black] py-[20px] '
        initial={{ y: -200, x: -200 }}
        animate={{ y: 0, x: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      >
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 20 }}
          transition={{ type: 'spring', duration: 2 }}
        >
          <span className='text-[25px]'>LOGO</span>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
