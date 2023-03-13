// @imports
import { Variants } from 'framer-motion';

/**
 * @dev Defined a horizontal common varients to use for fromer-motion components
 * @param initX
 * @param initDuration
 * @param initStaggerChildren
 * @returns Variants
 */
export const HorizontalCommonVariants = (
  initX: number,
  initDuration?: number,
  initStaggerChildren?: number
): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: initX,
    },
    shown: {
      opacity: 1,
      x: 0,
      transition: {
        duration: initDuration ? initDuration : 0.3,
        staggerChildren: initStaggerChildren ? initStaggerChildren : 0.13,
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };
};

/**
 * @dev Defined a horizontal common varients to use for fromer-motion components
 * @param initY
 * @param initDuration
 * @param initStaggerChildren
 * @returns Variants
 */
export const VerticalCommonVariants = (
  initY: number,
  initDelayChildren?: number,
  initDuration?: number,
  initStaggerChildren?: number
): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: initY,
    },
    shown: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: initDelayChildren,
        duration: initDuration ? initDuration : 0.3,
        staggerChildren: initStaggerChildren ? initStaggerChildren : 0.13,
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };
};
