import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reveal = ({ children, animationType, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const animations = {
    leftToRight: {
      hidden: { opacity: 0, x: "-100%" },
      visible: { opacity: 1, x: 0 },
      transition: { duration: 0.8, delay: delay }
    },
    rightToLeft: {
      hidden: { opacity: 0, x: "100%" },
      visible: { opacity: 1, x: 0 },
      transition: { duration: 0.8, delay: delay  }
    },
    botToTop: {
      hidden: { opacity: 0, y: "100%" },
      visible: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: delay }
    },
    topToBot: {
      hidden: { opacity: 0, y: "-100%" },
      visible: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: delay }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: animations[animationType].visible,
        hidden: animations[animationType].hidden,
      }}
      transition={animations[animationType].transition}
    >
      {children}
    </motion.section>
  );
};

export default Reveal;
