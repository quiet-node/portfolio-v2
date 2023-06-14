'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOpenInNew } from 'react-icons/md';
import ProjectTile from './utils/ProjectTile';
import { PROJECTS_LISTS, QUIET_NODE_GITHUB_LINK } from '../../utils/constants';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMoreClick = () => {
    setShowMore(true);
    if (showMore) {
      window.open(QUIET_NODE_GITHUB_LINK, '_blank', 'noreferrer');
    }
  };
  return (
    <section
      className='relative z-10 overflow-hidden scrollbar-hidden bg-gradient-to-t xmmd:bg-gradient-to-l from-[#EFD8C9] to-[#f8ad7b]
                -top-40
                xsm:-top-48
                md:-top-40
                lg:-top-52'
    >
      {/* container */}
      <div
        className='flex flex-col items-center
                mt-28
                xsm:mt-32
                md:mt-28
                xmmd:gap-0
                lg:mt-36'
      >
        {/* header */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-black text-[#9d5746]'
          >
            Projects.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-[#9d5746] border-none h-[0.2rem] w-20 sm:w-20 rounded-xl' />
          </motion.div>
        </div>

        {/* body - projects */}
        <div className='flex flex-col w-full'>
          {/* First 4 projects */}
          {PROJECTS_LISTS.slice(0, 4).map((project) => {
            return (
              <ProjectTile
                key={project.id}
                project={project}
                flipped={project.id % 2 !== 0}
              />
            );
          })}

          {showMore && (
            <>
              {/* rest projects */}
              {PROJECTS_LISTS.slice(4).map((project) => {
                return (
                  <ProjectTile
                    key={project.id}
                    project={project}
                    flipped={project.id % 2 !== 0}
                  />
                );
              })}
            </>
          )}

          {/* Show More button */}
          <div
            className={`relative h-16 flex justify-center items-center bg-white`}
          >
            <div
              onClick={() => handleShowMoreClick()}
              className={`absolute z-20 ${
                showMore ? 'w-56 py-3 showmore-bg-2' : 'w-44 py-3 showmore-bg-1'
              } -mt-16 text-white text-xl font-semibold rounded-full text-center cursor-pointer select-none 
                            showmore-btn transition-all duration-300 ease-in-out focus:outline-none`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='flex justify-center'
              >
                {showMore ? (
                  <div className='flex gap-1 items-center'>
                    More On Github
                    <MdOpenInNew />
                  </div>
                ) : (
                  'Show More'
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
