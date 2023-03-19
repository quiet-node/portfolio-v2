import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FRAMER_LINK,
  QUIET_NODE_PORTFOLIO_V2_GITHUB_LINK,
  REACT_LINK,
  SOCIAL_FOOTER,
  TAILWIND_LINK,
  TS_LINK,
  VERCEL_LINK,
  VITE_LINK,
} from '../../utils/constants';
import SocialMedia from '../utils/socialMedia';
import {
  HorizontalCommonVariants,
  VerticalCommonVariants,
} from '../../utils/framerVariants';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  const ref = useRef(null);
  const currentYear = new Date().getFullYear();
  const verticalVariants = VerticalCommonVariants(30);
  const horizontalVariants = HorizontalCommonVariants(90);
  const isInView = useInView(ref, { margin: '100% 0% -9% 0%' });
  return (
    <div
      className='overflow-hidden -mt-40 h-fit
                lg:-mt-52'
    >
      {/* wrapper */}
      <div>
        {/* Quote */}
        <div
          className='flex justify-center text-teal-500
                    xssm:text-xl xssm:font-semibold
                    sm:text-2xl
                    md:text-xl md:font-semibold
                    xmd:text-2xl xmd:mt-6'
        >
          <div ref={ref} className='w-fit'>
            {isInView && (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className='hidden xl:block before:content-[open-quote] after:content-[close-quote] justify-center typewriter 
                before:text-2xl after:text-2xl
                sm:before:text-3xl sm:after:text-3xl'
                >
                  Consistently improving just 1% each day may seem small, but it
                  is the most effective path to lasting progress.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className='hidden md:block xl:hidden before:content-[open-quote] after:content-[close-quote] justify-center typewriter 
                        before:text-2xl after:text-2xl'
                >
                  Small steps, big gains - the magic of persistent 1% daily
                  improvement.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className='hidden xssm:block md:hidden before:content-[open-quote] after:content-[close-quote] justify-center typewriter 
                        before:text-2xl after:text-2xl'
                >
                  1% daily improvement is the key to lasting progress.
                </motion.p>
              </>
            )}

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='xssm:hidden before:content-[open-quote] after:content-[close-quote] justify-center px-2 text-center text-xl font-semibold
                before:text-2xl after:text-2xl
                sm:before:text-3xl sm:after:text-3xl'
            >
              Consistently improving just 1% each day may seem small, but it is
              the most effective path to lasting progress.
            </motion.p>
          </div>
        </div>

        {/* Social */}
        <motion.div
          initial='hidden'
          whileInView='shown'
          viewport={{
            amount: 'some',
            margin: '100% 0% -9% 0%',
          }}
          variants={horizontalVariants}
          className='flex flex-col gap-6 mt-16 mb-12
                    px-3
                    xxsm:px-6
                    sm:px-9
                    xmmd:px-24 
                    2xl:px-[14rem]'
        >
          {/* greetings */}
          <div>
            <motion.div
              variants={horizontalVariants}
              className='text-4xl font-bold'
            >
              Follow me on the internet
            </motion.div>
            <motion.div
              variants={horizontalVariants}
              className='text-xl font-bold'
            >
              Let's be friend!
            </motion.div>
            <motion.div
              variants={horizontalVariants}
              className='text-sm tracking-tight font-bold -mt-1 text-gray-500'
            >
              Or let's just...you know...follow and never say anything to each
              other! SMH...
            </motion.div>
          </div>

          {/* social medias */}
          <motion.div
            variants={horizontalVariants}
            className='flex flex-col gap-3'
          >
            {SOCIAL_FOOTER.map((social) => {
              return (
                <motion.div
                  key={social.id}
                  variants={horizontalVariants}
                  whileHover={{ y: -3 }}
                >
                  <SocialMedia social={social} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Last */}
        <motion.div
          initial='hidden'
          whileInView='shown'
          viewport={{
            amount: 'some',
            margin: '100% 0% -9% 0%',
          }}
          variants={verticalVariants}
          className='bg-black text-white flex justify-center flex-col items-center px-3 py-3 text-lg font-semibold tracking-tight'
        >
          {/* technologies */}
          <motion.div variants={verticalVariants} className=''>
            Built with{' '}
            <span className='inline-flex gap-1'>
              <motion.a
                whileHover={{ y: -2 }}
                className='hover:underline'
                href={TS_LINK}
                target='_blank'
              >
                TypeScript,
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className='hover:underline'
                href={REACT_LINK}
                target='_blank'
              >
                React.js,
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className='hover:underline'
                href={VITE_LINK}
                target='_blank'
              >
                Vite.js,
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className='hover:underline'
                href={TAILWIND_LINK}
                target='_blank'
              >
                TailwindCSS,
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className='hover:underline'
                href={FRAMER_LINK}
                target='_blank'
              >
                Framer Motion,
              </motion.a>{' '}
              and{' '}
              <motion.a
                whileHover={{ y: -2 }}
                className='hover:underline'
                href={VERCEL_LINK}
                target='_blank'
              >
                Vercel.
              </motion.a>
            </span>
          </motion.div>
          {/* Star this project */}
          <motion.div variants={verticalVariants}>
            <motion.a
              href={QUIET_NODE_PORTFOLIO_V2_GITHUB_LINK}
              target='_blank'
            >
              <div className='flex items-center gap-1'>
                Star this project on Github
                <BsGithub />
              </div>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={verticalVariants}
            className='flex items-cent
          '
          >
            &#169; Quiet Node {currentYear}
          </motion.div>

          {/* Vietnamese */}
          <motion.div
            variants={verticalVariants}
            className='flex items-cent
          '
          >
            🇻🇳 Vietnamese 🇻🇳
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
