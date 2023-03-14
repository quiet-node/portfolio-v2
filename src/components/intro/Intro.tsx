import { motion } from 'framer-motion';
import { VerticalCommonVariants } from '../../utils/framerVariants';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import {
  QUIET_NODE_GITHUB_LINK,
  QUIET_NODE_LINKEDIN_LINK,
  QUIET_NODE_TWITTER_LINK,
} from '../../utils/constants';

const Intro = () => {
  const descriptionVariants = VerticalCommonVariants(30, 9, 0.9);

  return (
    <section
      className='h-screen overflow-x-hidden overflow-y-hidden scrollbar-hidden
                lg:min-h-[100vh] 
                2xl:max-w-[100rem] 2xl:mx-auto 2xl:min-h-[90vh]'
      id='intro'
    >
      <div className='h-full flex flex-col items-center justify-around relative'>
        {/* headers */}
        <div
          className='flex flex-col text-center mt-28
                     gap-6
                     sm:gap-12'
        >
          {/* Greetings */}
          <div className='drop-shadow-xl'>
            <motion.h1
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-primary font-extrabold flex gap-1 justify-center
                    text-3xl
                    sm:text-4xl'
            >
              Howdy,
              <motion.div
                animate={{
                  rotate: [0, 30, 0, 30, 0, 0, 0],
                  transition: { duration: 1.4, repeat: Infinity },
                }}
                className='cursor-pointer select-none'
              >
                👋
              </motion.div>{' '}
              It's Logan ;)
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-primary font-medium
                    text-lg sm:text-xl'
            >
              (a.k.a. quiet-node)
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            initial='hidden'
            whileInView='shown'
            viewport={{ once: true }}
            variants={descriptionVariants}
            className='text-lg sm:text-xl font-bold drop-shadow-xl'
          >
            <motion.div variants={descriptionVariants}>
              Full Stack Software Developer.
            </motion.div>
            <motion.div variants={descriptionVariants}>
              Blockchain and Web 3.0 Enthusiast.
            </motion.div>
            <motion.div variants={descriptionVariants}>
              Innovating technology for a brighter future.
            </motion.div>
          </motion.div>
        </div>

        <div className='flex flex-col gap-1'>
          {/* Social Medias */}
          <div className='text-5xl flex justify-center gap-16 py-3 text-teal-600 drop-shadow-2xl'>
            <motion.a
              initial={{ opacity: 0, x: -21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={QUIET_NODE_LINKEDIN_LINK}
              target='_blank'
              className='cursor-pointer hover:text-[#0A66C2]'
            >
              <AiFillLinkedin />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 21 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              href={QUIET_NODE_GITHUB_LINK}
              target='_blank'
              className='cursor-pointer hover:text-black '
            >
              <AiFillGithub />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={QUIET_NODE_TWITTER_LINK}
              target='_blank'
              className='cursor-pointer hover:text-[#1DA1F2]'
            >
              <AiFillTwitterCircle />
            </motion.a>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{
              y: [0, 21, 0],
              transition: { duration: 2, repeat: Infinity },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 1.4 }}
            className={`rounded-full relative
                        w-72 h-72
                        sm:w-[19rem] sm:h-[19rem]
                        lg:w-80 lg:h-80
                        2xl:w-[21rem] 2xl:h-[21rem]`}
          >
            <img
              className='absolute inset-0 w-full h-full object-center object-cover rounded-full select-none'
              src={'src/assets/profile_pic.png'}
              alt='nft cover image'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
