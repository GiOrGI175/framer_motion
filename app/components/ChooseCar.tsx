'use client';

import { motion } from 'framer-motion';
import {
  leftSwipVariants,
  childrenVariants,
  liHoverVariant,
} from './ChooseBrand';
import React, { useState } from 'react';
import Link from 'next/link';

type carsArrT = {
  name: string;
  year: string;
  price: string;
};

type ChooseCarPrpsT = {
  selectedCarBrand: {
    car: string;
    carsArr: carsArrT[];
  };
};

const ChooseCar: React.FC<ChooseCarPrpsT> = ({ selectedCarBrand }) => {
  console.log(selectedCarBrand, 'selectedCarBrand');

  const [carModel, setcarModel] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <motion.div variants={leftSwipVariants} initial='hidden' animate='visible'>
      <h2 className='font-bold text-[20px] border-b-[1px] border-[black]'>
        Choose Your car brand
      </h2>
      <motion.div variants={childrenVariants}>
        <ul className='py-[5px]'>
          {selectedCarBrand?.carsArr.map((car, index) => (
            <motion.li
              key={car.name}
              className='py-[5px] font-medium cursor-pointer'
              onClick={() => {
                setcarModel(car.name);
                setSelectedIndex(index);
              }}
              variants={liHoverVariant}
              initial='initial'
              whileHover='hover'
              animate={selectedIndex === index ? 'selected' : 'initial'}
            >
              {car.name} - {car.year} - ${car.price}
            </motion.li>
          ))}
        </ul>

        {carModel && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.6, originX: 0 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 520 }}
          >
            <Link href={`/base/${selectedCarBrand.car}/${carModel}`}>
              <button className='w-fit p-[10px] mt-[20px]  rounded-4xl bg-[#0c158d] cursor-pointer'>
                see car
              </button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ChooseCar;
