import { motion, MotionConfig } from 'framer-motion';

function Gestures() {
  return (
    <div className='min-h-dvh grid place-content-center gap-4'>
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: '2.5deg',
          }}
          className='example-button'
        >
          Click me!
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 1.1,
            rotate: '-2.5deg',
          }}
          className='example-button bg-green-700'
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}

export default Gestures;
