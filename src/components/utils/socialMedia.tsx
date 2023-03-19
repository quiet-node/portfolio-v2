import { ImMail } from 'react-icons/im';
import { SiDiscord, SiTiktok } from 'react-icons/si';
import { BsGithub, BsTwitter, BsReddit, BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface PageProps {
  social: {
    id: number;
    title: string;
    desc: string;
    link: string;
    bgClass: string;
  };
}

const SocialMedia = ({ social }: PageProps) => {
  const { id, title, desc, link, bgClass } = social;
  return (
    <motion.div
      onClick={() => {
        if (id === 6) {
          alert('SIKEE!!! You wish!!! LOOOOL');
        } else {
          window.open(link, '_target');
        }
      }}
      className={`cursor-pointer flex items-center w-fit py-1 rounded-lg ${bgClass} border-r-22 border-r-black
                w-full gap-3
                sm:pl-6 sm:gap-6
                xmmd:w-[90%]
                xl:w-[84%]`}
    >
      {/* icons */}
      <div className='text-5xl'>
        {id === 0 && (
          <div className='text-[#181717]'>
            <BsGithub />{' '}
          </div>
        )}
        {id === 1 && (
          <div className='text-[#FF4500]'>
            {' '}
            <BsReddit />{' '}
          </div>
        )}
        {id === 2 && (
          <div className='text-[#0077B5]'>
            {' '}
            <BsLinkedin />{' '}
          </div>
        )}
        {id === 3 && (
          <div className='text-[#1DA1F2]'>
            {' '}
            <BsTwitter />{' '}
          </div>
        )}
        {id === 4 && (
          <div className='text-[#D14836]'>
            {' '}
            <ImMail />{' '}
          </div>
        )}
        {id === 5 && (
          <div className='text-[#7289DA]'>
            {' '}
            <SiDiscord />{' '}
          </div>
        )}
        {id === 6 && (
          <div className='text-[#000]'>
            {' '}
            <SiTiktok />{' '}
          </div>
        )}
      </div>

      {/* title/desc */}
      <div className='flex flex-col'>
        {/* title */}
        <div className='text-lg sm:text-xl font-bold'>{title}</div>

        {/* desc */}
        <div className='text-base sm:text-lg tracking-tight font-semibold text-gray-500'>
          {desc}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialMedia;
