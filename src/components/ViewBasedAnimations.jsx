import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log('Is in view', isInView);
  }, [isInView]);

  return (
    <>
      <div className=' min-h-[150vh]'></div>
      <motion.div
        className=' min-h-[100vh] bg-purple-400 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <div
        ref={ref}
        className={`min-h-[100vh] ${
          isInView ? 'bg-blue-950' : 'bg-green-700'
        } transition-colors duration-1000`}
      ></div>
    </>
  );
}

export default ViewBasedAnimations;
