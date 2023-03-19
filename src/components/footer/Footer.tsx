import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '100% 0% -9% 0%' });
  return (
    <div
      className='-mt-40 h-fit
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

        {/*  */}
      </div>
    </div>
  );
};

export default Footer;
