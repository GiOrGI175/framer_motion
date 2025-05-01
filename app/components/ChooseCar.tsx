'use client';

import { motion } from 'framer-motion';

const liHoverVariant = {
  hover: {
    scale: 1.2,
    originX: 0,
    color: 'yellow',
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const ChooseCar = ({ selectedCarBrand }) => {
  return (
    <div>
      <h2 className='font-bold text-[20px] border-b-[1px] border-[black]'>
        Choose Your car brand
      </h2>
      <div>
        <ul className='py-[5px]'>
          {selectedCarBrand?.carsArr.map((car, index) => (
            <motion.li
              key={index}
              className='py-[5px] font-medium cursor-pointer'
              variants={liHoverVariant}
              whileHover='hover'
            >
              {car.name} - {car.year} - ${car.price}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChooseCar;
