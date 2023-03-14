import { motion } from 'framer-motion';
import SkillProficientBar from '../utils/skillProficientBar';

const Stats = () => {
  return (
    <section
      className='h-[600px] scrollbar-hidden flex justify-center items-center
            2xl:max-w-[100rem] 2xl:mx-auto'
    >
      {/* container */}
      <div
        className='relative flex flex-col gap-12 items-center border-2 border-[#e7edf7] bg-white
                  w-full h-full -top-40 rounded-2xl mx-1
                  xxsm:mx-3
                  xsm:-top-48 xsm:mx-6 xsm:rounded-3xl
                  sm:mx-9
                  md:mx-16 md:-top-32
                  lg:w-[850px] lg:h-[550px] lg:-top-44
                  xl:w-[950px] xl:h-[600px] xl:-top-32
                  '
      >
        {/* header */}
        <div className='mt-3 sm:mt-6 md:mt-9 lg:mt-12'>
          <motion.h1
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-4xl font-extrabold text-primary drop-shadow-2xl'
          >
            Stats.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-primary h-[0.2rem] w-16 rounded-xl drop-shadow-2xl' />
          </motion.div>
        </div>

        {/* body - skill proficient bars */}
        <div className='flex flex-col gap-9'>
          <SkillProficientBar value={85} logo='golang' />
      </div>
    </section>
  );
};

export default Stats;
