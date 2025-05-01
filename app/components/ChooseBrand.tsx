'use client';

import Link from 'next/link';
import { cars } from '../services/cars';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const leftSwipVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      type: 'spring',
      stiffness: 520,
      damping: 8,
      when: 'beforeChildren',
    },
  },
};

export const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const liHoverVariant = {
  initial: {
    color: '#000',
    fontSize: '16px',
    scale: 1,
  },
  hover: {
    color: 'yellow',
    fontSize: '24px',
    originX: 0,
    scale: 1.2,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
  selected: {
    color: 'yellow',
    fontSize: '24px',
    scale: 1.2,
  },
};

const ChooseBrand = () => {
  const [brand, setBrand] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <motion.div variants={leftSwipVariants} initial='hidden' animate='visible'>
      <h2 className='font-bold text-[20px] border-b-[1px] border-[black]'>
        Choose Your car brand
      </h2>
      <motion.div variants={childrenVariants}>
        <ul className='py-[5px]'>
          {cars.map((item, index) => (
            <motion.li
              key={item.car}
              className='py-[5px] font-medium cursor-pointer'
              onClick={() => {
                setBrand(item.car);
                setSelectedIndex(index);
              }}
              variants={liHoverVariant}
              initial='initial'
              whileHover='hover'
              animate={selectedIndex === index ? 'selected' : 'initial'}
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
      </motion.div>
    </motion.div>
  );
};

export default ChooseBrand;
