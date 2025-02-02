import React from 'react';
import { motion } from 'framer-motion';

const TestModeNotification = () => {
  return (
    <div className="relative w-full bg-black py-2">
      <motion.div
        className="absolute top-0 left-0 w-full text-center text-red-500 font-semibold text-lg md:text-xl"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          x: { repeat: Infinity, repeatType: 'reverse', duration: 30, ease: 'linear' }, // Very slow scroll
        }}
      >
        Malumotlaringiz xavfsiz himoyalangan, bu saytda hozir sinov rejimida ishlamoqda, ozgartirishlar kiritilmoqda
      </motion.div>
    </div>
  );
};

export default TestModeNotification;
