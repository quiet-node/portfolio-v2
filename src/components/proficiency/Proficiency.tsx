import { motion } from 'framer-motion';
import SkillProficientBar from '../utils/skillProficientBar';
import useScreenSizes from '../../hooks/useWindowSize/';

const Stats = () => {
  const [isSmall] = useScreenSizes();
  return (
    <section
      className='scrollbar-hidden flex justify-center items-center
            sm:h-[600px] 
            2xl:max-w-[100rem] 2xl:mx-auto'
    >
      {/* container */}
      <div
        className='relative flex flex-col items-center border-2 border-[#e7edf7] bg-white gap-16 rounded-2xl
                  -top-20 px-3
                  xsm:px-6 xsm:-top-24
                  sm:px-6
                  md:-top-20 md:px-9
                  lg:-top-24 lg:px-16
                  2xl:px-20
                  '
      >
        {/* header */}
        <div className='mt-3 sm:mt-6 md:mt-9 lg:mt-12'>
          <motion.h1
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-extrabold text-primary drop-shadow-2xl'
          >
            Proficiency.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-primary h-[0.2rem] w-20 sm:w-32 rounded-xl drop-shadow-2xl' />
          </motion.div>
        </div>

        {/* body - skill proficient bars */}
        <div className='flex flex-col gap-12 sm:flex-row sm:gap-9 mb-6 sm:mb-9 md:mb-12 lg:mb-16'>
          {/* left */}
          <div className='flex flex-col gap-12'>
            {/* @NOTICE: As `left` attributes on <SkillProficientBar> component can only be triggered from small screen size (i.e. 640px), 
            use `isSmall` state as the value for `left` attribute*/}
            {/* golang */}
            <SkillProficientBar
              value={85}
              logo='Golang'
              techLink='https://go.dev/'
              left={isSmall}
            />{' '}
            {/* typescript */}
            <SkillProficientBar
              value={92}
              logo='TypeScript'
              techLink='https://typescriptlang.org/'
              left={isSmall}
            />{' '}
            {/* soldity */}
            <SkillProficientBar
              value={75}
              logo='Solidity'
              techLink='https://soliditylang.org/'
              left={isSmall}
            />{' '}
            {/* java */}
            <SkillProficientBar
              value={88}
              logo='Java'
              techLink='https://java.com/'
              left={isSmall}
            />{' '}
            {/* MongoDB */}
            <SkillProficientBar
              value={81}
              logo='MongoDB'
              techLink='https://mongodb.com/'
              left={isSmall}
            />{' '}
            {/* tailwindcss */}
            <SkillProficientBar
              value={87}
              logo='TailwindCSS'
              techLink='https://tailwindcss.com/'
              left={isSmall}
            />{' '}
          </div>

          {/* right */}
          <div className='flex flex-col gap-12'>
            {/* ReactJS */}
            <SkillProficientBar
              value={90}
              logo='ReactJS'
              techLink='https://reactjs.org/'
            />
            {/* NextJS */}
            <SkillProficientBar
              value={88}
              logo='NextJS'
              techLink='https://nextjs.org/'
            />
            {/* SpringBoot */}
            <SkillProficientBar
              value={72}
              logo='SpringBoot'
              techLink='https://spring.io/'
            />
            {/* Hardhat */}
            <SkillProficientBar
              value={65}
              logo='Hardhat'
              techLink='https://hardhat.org/'
            />
            {/* NodeJS */}
            <SkillProficientBar
              value={87}
              logo='NodeJS'
              techLink='https://nodejs.org/'
            />
            {/* Docker */}
            <SkillProficientBar
              value={75}
              logo='Docker'
              techLink='https://docker.com/'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
