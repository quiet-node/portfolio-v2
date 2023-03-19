import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { VerticalCommonVariants } from '../../utils/framerVariants';
import {
  TS_LINK,
  VITE_LINK,
  REACT_LINK,
  FRAMER_LINK,
  VERCEL_LINK,
  TAILWIND_LINK,
  QUIET_NODE_PORTFOLIO_V2_GITHUB_LINK,
} from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const verticalVariants = VerticalCommonVariants(30);

  return (
    <div className='overflow-hidden'>
      {/* wrapper */}
      <div>
        {/* Last */}
        <motion.div
          initial='hidden'
          whileInView='shown'
          variants={verticalVariants}
          className='bg-black text-white flex justify-center flex-col items-center tracking-tight font-semibold text-center
                    px-3 py-3
                    xmmd:text-lg'
        >
          {/* technologies */}
          <motion.div variants={verticalVariants} className=''>
            Built with <br className='hidden xssm:block sm:hidden' />
            <span className='gap-1'>
              <motion.a
                whileHover={{ y: -2 }}
                className='inline hover:underline'
                href={TS_LINK}
                target='_blank'
              >
                TypeScript,{' '}
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className='inline hover:underline'
                href={REACT_LINK}
                target='_blank'
              >
                React.js,{' '}
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className='inline hover:underline'
                href={VITE_LINK}
                target='_blank'
              >
                Vite.js,{' '}
              </motion.a>
              <br className='xssm:hidden' />
              <motion.a
                whileHover={{ y: -2 }}
                className='inline hover:underline'
                href={TAILWIND_LINK}
                target='_blank'
              >
                TailwindCSS,{' '}
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className='inline hover:underline'
                href={FRAMER_LINK}
                target='_blank'
              >
                Framer Motion,{' '}
              </motion.a>{' '}
              and{' '}
              <motion.a
                whileHover={{ y: -2 }}
                className='inline hover:underline'
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
