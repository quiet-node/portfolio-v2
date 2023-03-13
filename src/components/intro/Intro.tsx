import {
  QUIET_NODE_GITHUB_LINK,
  QUIET_NODE_LINKEDIN_LINK,
  QUIET_NODE_TWITTER_LINK,
} from '../../utils/constants';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const Intro = () => {
  return (
    <section
      className='h-screen overflow-x-hidden scrollbar-hidden
                lg:min-h-[100vh] 
                2xl:max-w-[100rem] 2xl:mx-auto 2xl:min-h-[90vh] '
      id='intro'
    >
      <div className='h-full flex flex-col items-center justify-around'>
        {/* headers */}
        <div
          className='flex flex-col text-center mt-28
                     gap-6
                     sm:gap-12'
        >
          {/* Greetings */}
          <div className='drop-shadow-lg'>
            <h2
              className='text-primary font-extrabold
                    text-3xl
                    sm:text-4xl'
            >
              Howdy, 👋 It's Logan ;)
            </h2>
            <h3
              className='text-primary font-medium
                    text-lg sm:text-xl'
            >
              (a.k.a. quiet-node)
            </h3>
          </div>

          <div className='text-lg sm:text-xl font-bold drop-shadow-lg'>
            <div>Full Stack Software Developer.</div>
            <div>Blockchain and Web 3.0 Enthusiast.</div>
            <div>Innovating technology for a brighter future.</div>
          </div>
        </div>

        <div>
          {/* Social Medias */}
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a
              href={QUIET_NODE_GITHUB_LINK}
              target='_blank'
              className='transition hover:-translate-y-0.5 duration-200 cursor-pointer hover:text-black'
            >
              <AiFillGithub />
            </a>
            <a
              href={QUIET_NODE_LINKEDIN_LINK}
              target='_blank'
              className='transition hover:-translate-y-0.5 duration-200 cursor-pointer hover:text-[#0A66C2]'
            >
              <AiFillLinkedin />
            </a>
            <a
              href={QUIET_NODE_TWITTER_LINK}
              target='_blank'
              className='transition hover:-translate-y-0.5 duration-200 cursor-pointer hover:text-[#1DA1F2]'
            >
              <AiFillTwitterCircle />
            </a>
          </div>

          {/* Avatar */}
          <div
            className={`rounded-full relative
                    w-72 h-72
                    sm:w-[19rem] sm:h-[19rem]
                    lg:w-80 lg:h-80
                    2xl:w-[21rem] 2xl:h-[21rem]`}
          >
            <img
              className='absolute inset-0 w-full h-full object-center object-cover rounded-full'
              src={'src/assets/profile_pic.png'}
              alt='nft cover image'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
