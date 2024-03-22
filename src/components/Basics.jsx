import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Basics() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='min-h-dvh grid place-content-center gap-4'>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className='example-button'
        layout
      >
        Show-Hide
      </motion.button>
      <AnimatePresence mode='popLayout'>
        {isVisible && (
          <motion.div
            initial={{ rotate: '0deg', scale: 0, y: 0 }}
            animate={{ rotate: '180deg', scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: '0deg', scale: 0, Y: 0 }}
            transition={{
              duration: 1.5,
              ease: 'backInOut',
              times: [0, 0.25, 0.8, 1],
            }}
            className=' size-40 bg-stone-950'
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Basics;
