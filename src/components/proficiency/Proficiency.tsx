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
        className='relative flex flex-col items-center border-2 border-[#e7edf7] bg-white
                  //w-full //h-full w-fit //-top-40 rounded-2xl mx-1 gap-16
                  xxsm:mx-3
                  //xsm:-top-48 xsm:mx-6 xsm:rounded-3xl
                  sm:mx-9
                  md:mx-16 //md:-top-32
                  //lg:w-[850px] //lg:h-[550px] //lg:-top-40
                  //lg:-top-44
                  //xl:w-[950px] //xl:h-[600px] xl:-top-20 xl:px-16
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
            className='text-4xl font-extrabold text-primary drop-shadow-2xl'
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
            <hr className='bg-primary h-[0.2rem] w-32 rounded-xl drop-shadow-2xl' />
          </motion.div>
        </div>

        {/* body - skill proficient bars */}
        <div className='flex gap-9 mb-6 sm:mb-9 md:mb-12 lg:mb-16'>
          {/* left */}
          <div className='flex flex-col gap-12'>
            {/* golang */}
            <SkillProficientBar
              value={85}
              logo='Golang'
              techLink='https://go.dev/'
              left={true}
            />{' '}
            {/* typescript */}
            <SkillProficientBar
              value={92}
              logo='TypeScript'
              techLink='https://typescriptlang.org/'
              left={true}
            />{' '}
            {/* soldity */}
            <SkillProficientBar
              value={75}
              logo='Solidity'
              techLink='https://soliditylang.org/'
              left={true}
            />{' '}
            {/* java */}
            <SkillProficientBar
              value={88}
              logo='Java'
              techLink='https://java.com/'
              left={true}
            />{' '}
            {/* MongoDB */}
            <SkillProficientBar
              value={81}
              logo='MongoDB'
              techLink='https://mongodb.com/'
              left={true}
            />{' '}
            {/* tailwindcss */}
            <SkillProficientBar
              value={87}
              logo='TailwindCSS'
              techLink='https://tailwindcss.com/'
              left={true}
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
