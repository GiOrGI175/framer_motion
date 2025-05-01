'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { leftSwipVariants } from './ChooseBrand';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OverlayModal from './OverlayModal';

const CarModel = ({ model }: { model: string }) => {
  const [showOrder, setShowOrder] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const router = useRouter();

  return (
    <>
      <motion.div
        className='flex flex-col justify-between items-center'
        variants={leftSwipVariants}
        initial='hidden'
        animate='visible'
      >
        <AnimatePresence>
          {showOrder && (
            <motion.p
              className='relative z-20 text-white'
              initial={{ y: 1000 }}
              animate={{ y: -30 }}
              exit={{ y: -1000 }}
            >
              Thank you for your order
            </motion.p>
          )}
        </AnimatePresence>

        <h3>this car is {model}</h3>
        <motion.button
          className='w-fit p-[10px] mt-[20px]  rounded-2xl bg-[#0c158d] cursor-pointer'
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.6 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 520 }}
          onClick={() => {
            setShowOrder(true);
            setShowOverlay(true);
            setTimeout(() => setShowOrder(false), 2000);
            setTimeout(() => {
              setShowOverlay(false);
              router.push('/');
            }, 2500);
          }}
        >
          buy
        </motion.button>
      </motion.div>
      <>
        <OverlayModal showOverlay={showOverlay} />
      </>
    </>
  );
};

export default CarModel;
