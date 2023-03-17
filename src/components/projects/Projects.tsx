import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      className='relative z-10 overflow-hidden scrollbar-hidden bg-primary h-screen
                -top-52'
    >
      {/* container */}
      <div
        className='flex flex-col items-center text-white
                /mt-6
                /sm:mt-9
                md:mt-32
                2xl:max-w-[100rem] 2xl:mx-auto'
      >
        {/* header */}
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-extrabold'
          >
            Projects.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-white h-[0.2rem] w-20 sm:w-20 rounded-xl' />
          </motion.div>
        </div>

        {/* body - projects */}
      </div>
    </section>
  );
};

export default Projects;
