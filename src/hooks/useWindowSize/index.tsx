import useWindowSize from './useWindowSize';
import { useEffect, useState } from 'react';

const useScreenSizes = () => {
  const windowSize = useWindowSize();
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    setIsSmall((windowSize.width as number) >= 640);
  }, [windowSize]);
  return [isSmall];
};

export default useScreenSizes;
