'use client';

import { AnimatePresence, motion } from 'framer-motion';

const OverlayVariant = {
  visiable: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const OverlayModal = ({ showOverlay }: { showOverlay: boolean }) => {
  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className='fixed top-0 left-0 w-[100dvw] h-[100dvh] z-10'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          variants={OverlayVariant}
          initial='hidden'
          animate='visiable'
          exit='hidden'
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayModal;
