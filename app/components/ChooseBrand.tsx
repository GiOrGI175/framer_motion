'use client';

import Link from 'next/link';
import { cars } from '../services/cars';
import { useState } from 'react';
import { animate, motion } from 'framer-motion';

const ChooseBrand = () => {
  const [brand, setBrand] = useState('');

  return (
    <div>
      <h2 className='font-bold text-[20px] border-b-[1px] border-[black]'>
        Choose Your car brand
      </h2>
      <div>
        <ul className='py-[5px]'>
          {cars.map((item) => (
            <li
              key={item.car}
              className='py-[5px] font-medium cursor-pointer'
              onClick={() => setBrand(item.car)}
            >
              {item.car}
            </li>
          ))}
        </ul>

        {brand && (
          <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }}>
            <Link href={`base/${brand}`}>
              <button className='w-fit p-[10px] mt-[20px]  rounded-4xl bg-[#0c158d] cursor-pointer'>
                see all cars
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChooseBrand;
