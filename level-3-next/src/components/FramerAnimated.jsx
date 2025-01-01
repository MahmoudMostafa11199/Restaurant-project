'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { animationVariants } from '@/app/_lib/framerMotion-animate';

const FramerAnimated = ({
  children,
  direction = 'up',
  style,
  threshold = 0.3,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  const variant = animationVariants[direction];

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('animate');
      setHasAnimated(true);
    }
  }, [inView, controls, hasAnimated]);

  if (!variant) {
    console.error(
      `Invalid direction: ${direction}. Valid directions are 'up', 'down', 'left', 'right'.`
    );
    return null;
  }

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="initial"
      animate={controls}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default FramerAnimated;
