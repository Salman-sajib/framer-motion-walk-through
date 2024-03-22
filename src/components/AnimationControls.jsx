import { motion, useAnimation } from 'framer-motion';

function AnimationControls() {
  const flipAnimation = useAnimation();

  const handleClick = async () => {
    await flipAnimation.start({ rotate: '360deg' });
    await flipAnimation.start({ rotate: '0deg' });
  };

  return (
    <div className='min-h-dvh grid place-content-center gap-4'>
      <button onClick={handleClick} className='example-button'>
        Flip it!
      </button>
      <motion.div
        variants={{
          initial: {
            rotate: '0deg',
          },
          flip: {
            rotate: '360deg',
          },
        }}
        initial='initial'
        animate={flipAnimation}
        className=' size-40 bg-teal-950'
      ></motion.div>
    </div>
  );
}

export default AnimationControls;
