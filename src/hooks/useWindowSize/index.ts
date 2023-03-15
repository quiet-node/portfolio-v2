import useWindowSize from './useWindowSize';
import { useEffect, useState } from 'react';

const useScreenSizes = () => {
  const windowSize = useWindowSize();
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    setIsSmall((windowSize.width as number) >= 640);

    setIsMedium((windowSize.width as number) >= 768);
  }, [windowSize]);
  return [isSmall, isMedium];
};

export default useScreenSizes;
