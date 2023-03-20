import { useState } from 'react';
import { motion } from 'framer-motion';
import useScreenSizes from '../../hooks/useWindowSize';
import { VerticalCommonVariants } from '../../utils/framerVariants';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

interface PapgeProps {
  project: Project;
  flipped?: boolean;
}

const ProjectTile = ({ project, flipped }: PapgeProps) => {
  const [, , isMdMedium] = useScreenSizes();
  const verticalMoreSkills = VerticalCommonVariants(60);
  const [hovering, setHovering] = useState({
    live: false,
    demo: false,
    github: false,
  });
  const {
    id,
    title,
    stacks,
    description,
    liveLink,
    demoLink,
    repoLink,
    thumbnail,
    cssWrapper,
    cssDesc,
    cssBtn,
    cssUnderline,
  } = project;

  return (
    <div
      className={`overflow-hidden ${
        isMdMedium ? cssWrapper : project.cssWrapperSm
      }`}
    >
      <div
        className={`relative flex ${flipped && 'xmmd:flex-row-reverse'}
                  flex-col
                  xmmd:flex-row xmmd:h-[650px] xmmd:items-center xmmd:px-24
                  2xl:max-w-[100rem] 2xl:mx-auto 2xl:h-[650px]`}
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
          className={`flex flex-col gap-4 mt-16
                    px-3
                    xxsm:px-6
                    sm:px-9
                    xmmd:w-1/2 xmmd:px-0 xmmd:mt-0`}
        >
          {/* title */}
          <motion.h3
            variants={verticalMoreSkills}
            className='text-4xl font-black'
          >
            {' '}
            {title}{' '}
          </motion.h3>

          {/* description */}
          <motion.p
            variants={verticalMoreSkills}
            className={`text-lg leading-6 tracking-tight xmmd:leading-tight xmmd:tracking-tight font-semibold ${cssDesc}`}
          >
            {' '}
            {description}{' '}
          </motion.p>

          {/* tech stacks & buttons*/}
          <div className='flex gap-4 flex-col sm:flex-row xmmd:flex-col'>
            {/* tech stacks */}
            <motion.div
              variants={verticalMoreSkills}
              className='flex flex-col gap-3 
                        sm:w-7/12 
                        xmmd:w-fit'
            >
              {/* blockchain */}
              {stacks.BC.length > 0 && (
                <motion.div
                  variants={verticalMoreSkills}
                  key={'blockchain'}
                  className='flex gap-1 items-center'
                >
                  <p className='font-bold text-base w-[5.5rem] xsm:w-24 xsm:text-lg sm:w-24'>
                    Blockchain:{' '}
                  </p>
                  <div className='flex gap-1'>
                    {stacks.BC.map((tech, key) => {
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
                            src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
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
              {stacks.BE.length > 0 && (
                <motion.div
                  variants={verticalMoreSkills}
                  key={'backend'}
                  className='flex gap-1 items-center'
                >
                  <p className='font-bold text-base w-[5.5rem] xsm:w-24 xsm:text-lg sm:w-24'>
                    Backend:{' '}
                  </p>
                  <div className='flex gap-1'>
                    {stacks.BE.map((tech, key) => {
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
                            src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
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
                stacks.FE.length > 0 && (
                  <motion.div
                    variants={verticalMoreSkills}
                    key={'frontend'}
                    className='flex gap-1 items-center'
                  >
                    <p className='font-bold text-base w-[5.5rem] xsm:w-24 xsm:text-lg sm:w-24'>
                      Frontend:{' '}
                    </p>
                    <div className='flex gap-1'>
                      {stacks.FE.map((tech, key) => {
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
                              src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
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

              {/* front-end */}
              {[
                stacks.Mobile.length > 0 && (
                  <motion.div
                    variants={verticalMoreSkills}
                    key={'front-end'}
                    className='flex gap-1 items-center'
                  >
                    <p className='text-lg font-bold w-16'>Mobile: </p>
                    <div className='flex gap-1'>
                      {stacks.Mobile.map((tech, key) => {
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
                              src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
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
              className={`flex justify-center flex-col ${cssBtn} text-lg xsm:text-xl font-semibold 
                          gap-3
                          sm:w-5/12 sm:gap-6
                          xmmd:gap-2 xmmd:w-fit`}
            >
              {/* live */}
              {liveLink !== '' && (
                <motion.a
                  variants={verticalMoreSkills}
                  href={liveLink}
                  target='_blank'
                  className='cursor-pointer flex items-center w-fit'
                  onMouseEnter={() =>
                    setHovering({
                      ...hovering,
                      live: true,
                      github: false,
                      demo: false,
                    })
                  }
                  onMouseLeave={() =>
                    setHovering({
                      ...hovering,
                      live: false,
                      github: false,
                      demo: false,
                    })
                  }
                >
                  <span className='flex flex-col items-center'>
                    <p className=''>Landing Page</p>
                    <motion.span
                      animate={{ scaleX: hovering.live ? 1 : 0 }}
                      transition={{ easings: true }}
                    >
                      <hr
                        className={`${cssUnderline} border-none h-[0.2rem] w-6 sm:w-20 -mt-1 rounded-xl`}
                      />
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

              {/* demo */}
              {demoLink !== '' && (
                <motion.a
                  variants={verticalMoreSkills}
                  href={demoLink}
                  target='_blank'
                  className='cursor-pointer flex items-center w-fit'
                  onMouseEnter={() =>
                    setHovering({
                      ...hovering,
                      demo: true,
                      github: false,
                      live: false,
                    })
                  }
                  onMouseLeave={() =>
                    setHovering({
                      ...hovering,
                      demo: false,
                      github: false,
                      live: false,
                    })
                  }
                >
                  <span className='flex flex-col items-center'>
                    <p className=''>Watch a demo video</p>
                    <motion.span
                      animate={{ scaleX: hovering.demo ? 1 : 0 }}
                      transition={{ easings: true }}
                    >
                      <hr
                        className={`${cssUnderline} border-none h-[0.2rem] w-6 sm:w-32 -mt-1 rounded-xl`}
                      />
                    </motion.span>
                  </span>

                  <motion.span
                    animate={{ translateX: hovering.demo ? 6 : 0 }}
                    transition={{ easings: true }}
                    className='whitespace-nowrap'
                  >
                    {hovering.demo ? (
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
                href={repoLink}
                target='_blank'
                className='cursor-pointer flex items-center w-fit'
                onMouseEnter={() =>
                  setHovering({
                    ...hovering,
                    github: true,
                    live: false,
                    demo: false,
                  })
                }
                onMouseLeave={() =>
                  setHovering({
                    ...hovering,
                    github: false,
                    live: false,
                    demo: false,
                  })
                }
              >
                <span className='flex flex-col items-center'>
                  <p className=''>
                    View source code{' '}
                    <span className='hidden xxsm:inline sm:hidden md:inline'>
                      {' '}
                      on Github{' '}
                    </span>
                  </p>
                  <motion.span
                    animate={{ scaleX: hovering.github ? 1 : 0 }}
                    transition={{ easings: true }}
                  >
                    <hr
                      className={`${cssUnderline} border-none h-[0.2rem] w-6 sm:w-28 md:w-48 -mt-1 rounded-xl`}
                    />
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
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: id % 2 === 0 ? 90 : -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            amount: 'some',
            margin: '100% 0% -9% 0%',
          }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className={`xmmd:absolute ${
            flipped ? 'xmmd:left-0' : 'xmmd:right-3'
          } border-22 border-black ${
            id === 0
              ? 'xmmd:w-3/5'
              : 'xmmd:w-[500px] lg:w-[520px] xl:w-[650px] 2xl:w-[700px]'
          } flex items-center justify-center
          ${(id === 5 || id === 6) && 'mt-9 mb-16 xmmd:mb-0'}`}
        >
          <img
            src={`assets/project_thumbnails/${thumbnail}`}
            alt={title}
            className='border-22 border-black'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectTile;
