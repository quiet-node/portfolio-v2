import { motion } from 'framer-motion';
import { ImMail } from 'react-icons/im';
import { VerticalCommonVariants } from '../../utils/framerVariants';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import {
  QUIET_NODE_EMAIL_LINK,
  QUIET_NODE_GITHUB_LINK,
  QUIET_NODE_LINKEDIN_LINK,
  QUIET_NODE_TWITTER_LINK,
} from '../../utils/constants';

const Intro = () => {
  const descriptionVariants = VerticalCommonVariants(60, 9, 0.9);

  return (
    <section
      className='h-screen overflow-hidden scrollbar-hidden
                lg:min-h-[100vh]
                2xl:max-w-[100rem] 2xl:mx-auto'
      id='intro'
    >
      {/* container */}
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
              <motion.span
                animate={{
                  rotate: [0, 30, 0, 30, 0, 0, 0],
                  transition: { duration: 1.4, repeat: Infinity },
                }}
                className='cursor-pointer select-none'
              >
                👋
              </motion.span>{' '}
              It's Logan <span className='hidden xxsm:inline'>;)</span>
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

        {/* Social & Avatar */}
        <div className='flex flex-col'>
          {/* Social Medias */}
          <div className='text-5xl flex flex-wrap justify-center gap-9 xxsm:gap-12 sm:gap-16 lg:gap-20 py-3 text-teal-600'>
            <motion.a
              initial={{ opacity: 0, x: -21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={QUIET_NODE_LINKEDIN_LINK}
              target='_blank'
              className='cursor-pointer hover:text-[#0A66C2]'
              title='LinkedIn'
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
              className='cursor-pointer hover:text-black'
              title='GitHub'
            >
              <AiFillGithub />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 21 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              href={QUIET_NODE_TWITTER_LINK}
              target='_blank'
              className='cursor-pointer hover:text-[#1DA1F2]'
              title='Twitter'
            >
              <AiFillTwitterCircle />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={QUIET_NODE_EMAIL_LINK}
              target='_blank'
              className='cursor-pointer hover:text-red-600 flex items-center'
              title='Gmail'
            >
              <ImMail size={40} />
            </motion.a>
          </div>

          {/* Avatar */}
          <div className='flex justify-center'>
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
                src={'src/assets/avatars/profile_pic.png'}
                alt='quiet-node'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
