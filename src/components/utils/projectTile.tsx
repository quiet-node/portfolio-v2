import { useState } from 'react';
import { motion } from 'framer-motion';
import { VerticalCommonVariants } from '../../utils/framerVariants';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

interface PapgeProps {
  project: Project;
  flipped?: boolean;
}

const ProjectTile = ({ project, flipped }: PapgeProps) => {
  const verticalMoreSkills = VerticalCommonVariants(60);
  const [hovering, setHovering] = useState({
    github: false,
    live: false,
  });

  return (
    <div
      className='
                mx-6
                2xl:max-w-[80rem] 2xl:mx-auto'
    >
      {/* left wrapper*/}
      <motion.div
        initial='hidden'
        whileInView='shown'
        viewport={{
          amount: 'some',
          margin: '100% 0% -9% 0%',
        }}
        variants={verticalMoreSkills}
        className='flex flex-col gap-3'
      >
        {/* title */}
        <motion.h3
          variants={verticalMoreSkills}
          className='text-3xl font-semibold text-center '
        >
          {' '}
          {project.name}{' '}
        </motion.h3>

        {/* description */}
        <motion.p
          variants={verticalMoreSkills}
          className='text-lg leading-tight tracking-tight font-medium'
        >
          {' '}
          {project.description}{' '}
        </motion.p>

        {/* tech stacks */}
        <motion.div
          variants={verticalMoreSkills}
          className='flex flex-col gap-3'
        >
          {/* blockchain */}
          {project.stacks.BC.length > 0 && (
            <motion.div
              variants={verticalMoreSkills}
              key={'blockchain'}
              className='flex gap-1 items-center'
            >
              <p className='text-lg font-bold w-24'>Blockchain: </p>
              <div className='flex gap-1'>
                {project.stacks.BC.map((tech, key) => {
                  return (
                    <motion.a
                      href={tech.techLink}
                      key={key}
                      target='_blank'
                      title={tech.technology}
                      variants={verticalMoreSkills}
                      className='flex items-center cursor-pointer'
                    >
                      <motion.img
                        whileHover={{
                          x: [0, -80, 90, -80, 70, -60, 0],
                          y: [0, -80, 70, -60, 0],
                          transition: { duration: 0.5 },
                        }}
                        src={`src/assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
                        alt={`${tech}-logo`}
                        width={43}
                        className={`hover:scale-125 scale transition duration-300 select-none`}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* back-end */}
          {project.stacks.BE.length > 0 && (
            <motion.div
              variants={verticalMoreSkills}
              key={'backend'}
              className='flex gap-1 items-center'
            >
              <p className='text-lg font-bold w-24'>Back-end: </p>
              <div className='flex gap-1'>
                {project.stacks.BE.map((tech, key) => {
                  return (
                    <motion.a
                      href={tech.techLink}
                      key={key}
                      target='_blank'
                      title={tech.technology}
                      variants={verticalMoreSkills}
                      className='flex items-center cursor-pointer'
                    >
                      <motion.img
                        whileHover={{
                          x: [0, -80, 90, -80, 70, -60, 0],
                          y: [0, -80, 70, -60, 0],
                          transition: { duration: 0.5 },
                        }}
                        src={`src/assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
                        alt={`${tech}-logo`}
                        width={43}
                        className={`hover:scale-125 scale transition duration-300 select-none`}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* front-end */}
          {[
            project.stacks.FE.length > 0 && (
              <motion.div
                variants={verticalMoreSkills}
                key={'front-end'}
                className='flex gap-1 items-center'
              >
                <p className='text-lg font-bold w-24'>Front-end: </p>
                <div className='flex gap-1'>
                  {project.stacks.FE.map((tech, key) => {
                    return (
                      <motion.a
                        href={tech.techLink}
                        key={key}
                        target='_blank'
                        title={tech.technology}
                        variants={verticalMoreSkills}
                        className='flex items-center cursor-pointer'
                      >
                        <motion.img
                          whileHover={{
                            x: [0, -80, 90, -80, 70, -60, 0],
                            y: [0, -80, 70, -60, 0],
                            transition: { duration: 0.5 },
                          }}
                          src={`src/assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
                          alt={`${tech}-logo`}
                          width={43}
                          className={`hover:scale-125 scale transition duration-300 select-none`}
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            ),
          ]}
        </motion.div>

        {/* buttons */}
        <motion.div
          variants={verticalMoreSkills}
          className='flex justify-center flex-col'
        >
          {/* live */}
          {project.liveLink !== '' && (
            <motion.a
              variants={verticalMoreSkills}
              href={project.liveLink}
              target='_blank'
              className='cursor-pointer flex items-center w-fit'
              onMouseEnter={() =>
                setHovering({ ...hovering, live: true, github: false })
              }
              onMouseLeave={() =>
                setHovering({ ...hovering, live: false, github: false })
              }
            >
              <span className='flex flex-col items-center'>
                <p className='text-lg font-semibold'>Landing Page</p>
                <motion.span
                  animate={{ scaleX: hovering.live ? 1 : 0 }}
                  transition={{ easings: true }}
                >
                  <hr className='bg-white h-[0.1rem] w-6 sm:w-20 -mt-1 rounded-xl' />
                </motion.span>
              </span>

              <motion.span
                animate={{ translateX: hovering.live ? 6 : 0 }}
                transition={{ easings: true }}
                className='whitespace-nowrap'
              >
                {hovering.live ? (
                  <MdArrowForward size={24} />
                ) : (
                  <MdKeyboardArrowRight size={24} />
                )}
              </motion.span>
            </motion.a>
          )}

          {/* github */}
          <motion.a
            variants={verticalMoreSkills}
            href={project.repoLink}
            target='_blank'
            className='cursor-pointer flex items-center w-fit'
            onMouseEnter={() =>
              setHovering({ ...hovering, github: true, live: false })
            }
            onMouseLeave={() =>
              setHovering({ ...hovering, github: false, live: false })
            }
          >
            <span className='flex flex-col items-center'>
              <p className='text-lg font-semibold'>
                View source code on Github
              </p>
              <motion.span
                animate={{ scaleX: hovering.github ? 1 : 0 }}
                transition={{ easings: true }}
              >
                <hr className='bg-white h-[0.1rem] w-6 sm:w-48 -mt-1 rounded-xl' />
              </motion.span>
            </span>

            <motion.span
              animate={{ translateX: hovering.github ? 6 : 0 }}
              transition={{ easings: true }}
              className=' whitespace-nowrap'
            >
              {hovering.github ? (
                <MdArrowForward size={24} />
              ) : (
                <MdKeyboardArrowRight size={24} />
              )}
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* right */}
    </div>
  );
};

export default ProjectTile;
