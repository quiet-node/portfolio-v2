import { motion } from 'framer-motion';
import { ProjectTile } from '../utils';
import { PROJECTS_LISTS } from '../../utils/constants';

const Projects = () => {
  return (
    <section
      className='relative z-10 overflow-hidden scrollbar-hidden bg-[#EFD8C9]
                -top-52'
    >
      {/* container */}
      <div
        className='flex flex-col items-center
                gap-9
                md:mt-32'
      >
        {/* header */}
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-black text-[#A87163]'
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
            <hr className='bg-[#A87163] h-[0.2rem] w-20 sm:w-20 rounded-xl' />
          </motion.div>
        </div>

        {/* body - projects */}
        <div className='flex flex-col w-full'>
          {PROJECTS_LISTS.map((project) => {
            return (
              <ProjectTile
                key={project.id}
                project={project}
                flipped={project.id % 2 !== 0}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
