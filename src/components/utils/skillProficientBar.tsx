import { useEffect, useRef, useState } from 'react';
import { animate, motion } from 'framer-motion';

// @source: https://github.com/R4M5E5/Progress-bar-with-Framer-Motion-Tutorial

const SkillProficientBar = ({
  value,
  logo,
}: {
  value: number;
  logo: string;
}) => {
  const percentageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const percentageText = percentageRef.current?.textContent;
    if (percentageText != null) {
      animate(0, value, {
        duration: 3,
        ease: [0.42, 0, 0.001, 1],
        onUpdate: (currentValue: number) => {
          if (percentageRef.current !== null) {
            percentageRef.current.textContent = currentValue.toFixed(0);
          }
        },
      });
    }
  }, [value]);

  return (
    <div className='flex items-center gap-1 relative'>
      <img
        src={`src/assets/tech_logos/${logo}.svg`}
        alt='golang-logo'
        className='absolute -left-10'
      />
      <div className='w-[400px] h-[30px] flex justify-start items-stretch rounded-lg bg-[#454650] border-1 border-teal-200 overflow-hidden'>
        <motion.div
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 3,
            ease: [0.42, 0, 0.001, 1],
          }}
          className={`w-0 proficient-bar-animation`}
        />
      </div>
      <div className='w-12 flex justify-center gap-1 font-bold text-teal-500 text-lg'>
        <p ref={percentageRef}>0</p>
        <p>%</p>
      </div>
    </div>
  );
};

export default SkillProficientBar;
