import { useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';

// @source: https://github.com/R4M5E5/Progress-bar-with-Framer-Motion-Tutorial
const SkillProficientBar = ({
  value,
  logo,
  techLink,
  left,
}: {
  value: number;
  logo: string;
  techLink: string;
  left?: boolean;
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
    <div
      className={`flex items-center gap-1 relative ${
        left ? ' flex-row-reverse' : ''
      }`}
    >
      {/* Logo */}
      <a
        href={techLink}
        target='_blank'
        title={logo}
        className='flex items-center cursor-pointer'
      >
        <img
          src={`src/assets/tech_logos/${logo.toLowerCase()}.svg`}
          alt={`${logo}-logo`}
          className={`absolute ${
            left ? '-right-3' : 'sm:-left-3'
          } hover:scale-110 transition duration-300 select-none`}
        />
      </a>

      {/* progress bar */}
      <div
        className={`flex justify-start items-stretch bg-[#454650] border-1 border-teal-200 overflow-hidden 
                    w-[225px] h-[10px] rounded
                    xxsm:w-[240px]
                    xsm:w-[320px] xsm:h-[12px]
                    xssm:w-[400px]
                    sm:w-[200px] sm:rounded-md
                    md:w-[250px] md:h-[12px]
                    xmd:w-[300px] xmd:h-[14px]
                    lg:w-[350px] lg:h-[15px]
        ${left ? ' flex-row-reverse' : ''}`}
      >
        <motion.div
          whileInView={{
            width: `${value}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            ease: [0.42, 0, 0.001, 1],
          }}
          className={`w-0 proficient-bar-animation rounded`}
        />
      </div>

      {/* percentage */}
      <div
        className='flex justify-center text-teal-600
                w-9 text-base font-bold
                sm:w-12 sm:text-lg sm:font-extrabold'
      >
        <p ref={percentageRef}>0</p>
        <p>%</p>
      </div>
    </div>
  );
};

export default SkillProficientBar;
