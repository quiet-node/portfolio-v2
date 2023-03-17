import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '100% 0% -9% 0%' });
  return (
    <section
      className='overflow-hidden scrollbar-hidden bg-primary
                h-[400px]
                md:h-[450px]
                lg:h-[500px]'
    >
      {/* container */}
      <div
        className='flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
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
            About.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-white h-[0.2rem] w-12 sm:w-16 rounded-xl' />
          </motion.div>
        </div>

        {/* body */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
          className='font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9'
        >
          {/* first sentence */}
          <motion.div>
            <p>
              An avid technology believer{' '}
              <br className='hidden xxsm:block xsm:hidden' /> who is{' '}
              <br className='hidden xsm:block sm:hidden' /> continually
              intrigued <br className='hidden lg:block' /> by{' '}
              <br className='hidden xxsm:block xsm:hidden' /> the{' '}
              <br className='hidden sm:block lg:hidden' />
              immense potential <br className='hidden xsm:block sm:hidden' /> of
              blockchain <br className='hidden xxsm:block xsm:hidden' /> and AI
              can revolutionize the future.
            </p>
          </motion.div>

          {/* @medium-device: second sentence */}
          <motion.div className='hidden sm:block'>
            <p>
              Through commitment to professionalism,{' '}
              <span className='sm:hidden md:inline'>and </span>
              <span className='hidden lg:inline'>focus on</span>{' '}
              <span className='sm:hidden md:inline'>excellence,</span>
              I am passionate <br className='hidden md:block lg:hidden' /> about{' '}
              <br className='hidden lg:block' /> creating{' '}
              <br className='hidden sm:block md:hidden lg:hidden' /> elegant and{' '}
              <span className='lg:hidden'>agile</span>{' '}
              <span
                className='hidden lg:inline
              '
              >
                efficient{' '}
              </span>
              solutions bringing novelty and comfort to{' '}
              <span className='lg:hidden'>life.</span>{' '}
              <span className='hidden lg:inline'>
                all aspects of human life
              </span>
            </p>
          </motion.div>

          {/* third sentence */}
          <div className='mt-6 flex justify-center'>
            <div ref={ref} className=' w-fit'>
              {isInView ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
                  className='hidden sm:block before:content-[open-quote] after:content-[close-quote] justify-center sm:typewriter 
                        before:text-2xl after:text-2xl
                        sm:before:text-3xl sm:after:text-3xl'
                >
                  Leveraging technology to drive{' '}
                  <span className='hidden sm:inline-block'>positive</span>{' '}
                  changes and <br className='hidden xsm:block sm:hidden' />{' '}
                  improve the world.
                </motion.p>
              ) : (
                <></>
              )}

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
                className='sm:hidden before:content-[open-quote] after:content-[close-quote] justify-center
                        before:text-2xl after:text-2xl'
              >
                Leveraging technology to drive{' '}
                <span className='hidden sm:inline-block'>positive</span> changes
                and <br className='hidden xsm:block sm:hidden' /> improve the
                world.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
