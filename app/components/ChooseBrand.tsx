'use client';

import Link from 'next/link';
import { cars } from '../services/cars';
import { useState } from 'react';
import { animate, motion } from 'framer-motion';

const leftSwipVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visable: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      type: 'spring',
      stiffness: 520,
    },
  },
};

const ChooseBrand = () => {
  const [brand, setBrand] = useState('');

  return (
    <motion.div
      // initial={{ x: '-100vw' }}
      // animate={{ x: 0 }}
      // transition={{ duration: 1.5, type: 'spring', stiffness: 520 }}
      variants={leftSwipVariants}
      initial='hidden'
      animate='visable'
    >
      <h2 className='font-bold text-[20px] border-b-[1px] border-[black]'>
        Choose Your car brand
      </h2>
      <div>
        <ul className='py-[5px]'>
          {cars.map((item) => (
            <motion.li
              key={item.car}
              className='py-[5px] font-medium cursor-pointer'
              onClick={() => setBrand(item.car)}
              whileHover={{ scale: 1.2, originX: 0, color: 'yellow' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.car}
            </motion.li>
          ))}
        </ul>

        {brand && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.6, originX: 0 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 520 }}
          >
            <Link href={`base/${brand}`}>
              <button className='w-fit p-[10px] mt-[20px]  rounded-4xl bg-[#0c158d] cursor-pointer'>
                see all cars
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ChooseBrand;
