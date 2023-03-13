const About = () => {
  return (
    <section className='h-[500px] overflow-x-hidden scrollbar-hidden bg-primary'>
      {/* container */}
      <div
        className='flex flex-col items-center text-white
                //px-4 mt-6
                md:mt-9
                //lg:px-72 
                2xl:max-w-[100rem] 2xl:mx-auto'
      >
        {/* header */}
        <div>
          <h1 className='text-3xl font-extrabold'>About.</h1>
          <div className='flex justify-center -mt-0.5'>
            <hr className='bg-white h-[0.2rem] w-16 rounded-xl' />
          </div>
        </div>

        {/* body */}
        <div
          className='font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9'
        >
          {/* @default: first sentence */}
          <div className='xxsm:hidden'>
            <p>
              An avid technology believer who is continually intrigued by the
              immense potential of blockchain and AI can revolutionize the
              future.
            </p>
          </div>
          {/* @default: first sentence */}
          <div className='hidden xxsm:block xsm:hidden'>
            <p>An avid technology believer </p>
            <p>who is continually intrigued by </p>
            <p>the immense potential of blockchain </p>
            <p>and AI can revolutionize the future.</p>
          </div>

          {/* @extra-small-device: first sentence */}
          <div className='hidden xsm:block sm:hidden'>
            <p>An avid technology believer who is</p>
            <p>continually intrigued by the immense potential</p>
            <p>of blockchain and AI can revolutionize the future.</p>
          </div>

          {/* @small-device: first sentence */}
          <div className='hidden sm:block lg:hidden'>
            <p>
              An avid technology believer who is continually intrigued by the
            </p>
            <p>
              immense potential of blockchain and AI can revolutionize the
              future.
            </p>
          </div>

          {/* @large-device: first sentce */}
          <div className='hidden lg:block'>
            <p>An avid technology believer who is continually intrigued</p>
            <p>
              by the immense potential of blockchain and AI can revolutionize
              the future.
            </p>
          </div>

          {/* @medium-device: second sentence */}
          <div
            className='hidden md:block lg:hidden
          '
          >
            <p>
              Through commitment to professionalism and excellence, I am
              passionate
            </p>
            <p>
              about creating elegant and agile solutions bringing novelty and
              comfort to life.
            </p>
          </div>

          {/* @large-device: second sentence */}
          <div
            className='hidden lg:block
          '
          >
            <p>
              Through commitment to professionalism and a focus on excellence, I
              am passionate about
            </p>
            <p>
              creating elegant and efficient solutions that bring innovation and
              comfort to all aspects of human life.
            </p>
          </div>

          <div className='mt-6'>
            {/* @default: third sentence */}
            <p
              className='xsm:hidden sm:block before:content-[open-quote] after:content-[close-quote]
                        before:text-2xl after:text-2xl
                        sm:before:text-3xl sm:after:text-3xl'
            >
              Leveraging technology to drive{' '}
              <span className='hidden sm:inline-block'>positive</span> changes
              and improve the world.
            </p>

            {/* @extra-small-device: third sentence */}
            <div className='hidden xsm:block sm:hidden'>
              <p
                className='before:content-[open-quote]
                        before:text-2xl'
              >
                Leveraging technology to drive positive changes{' '}
              </p>
              <p className=' after:content-[close-quote] after:text-2xl'>
                and improve the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
