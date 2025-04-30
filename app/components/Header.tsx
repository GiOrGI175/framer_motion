'use client';

import { animate, motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className='w-full flex justify-center items-center overflow-hidden'
      initial={{ y: -200 }}
      animate={{ y: 0 }}
    >
      <div className='max-w-[1280px] w-full flex justify-between border-b-[2px] border-[black] py-[20px]'>
        <motion.div initial={{ x: -200 }} animate={{ x: 20 }}>
          <span className='text-[25px]'>LOGO</span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
