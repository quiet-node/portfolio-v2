const Stats = () => {
  return (
    <section
      className='h-[600px] scrollbar-hidden flex justify-center items-center
            2xl:max-w-[100rem] 2xl:mx-auto'
    >
      {/* container */}
      <div
        className='relative flex flex-col justify-center items-center border-2 /border-[#e7edf7] border-black bg-white
                  w-full h-full -top-40 rounded-2xl mx-1
                  xxsm:mx-3
                  xsm:-top-48 xsm:mx-6 xsm:rounded-3xl
                  sm:mx-9
                  md:mx-16 md:-top-32
                  lg:w-[850px] lg:h-[550px] lg:-top-44
                  xl:w-[950px] xl:h-[600px] xl:-top-32
                  '
      ></div>
    </section>
  );
};

export default Stats;
