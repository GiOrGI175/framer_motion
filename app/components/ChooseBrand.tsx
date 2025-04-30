'use client';

import Link from 'next/link';
import { cars } from '../services/cars';

const ChooseBrand = () => {
  return (
    <div>
      <h2 className='font-bold text-[20px] border-b-[1px] border-[black]'>
        Choose Your car brand
      </h2>
      <div>
        <ul className='py-[5px]'>
          {cars.map((item) => (
            <Link key={item.car} href={`/base/${item.car}`}>
              <li className='py-[5px] font-medium'>{item.car}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChooseBrand;
