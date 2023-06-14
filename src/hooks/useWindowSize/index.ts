'use client';

import useWindowSize from './useWindowSize';
import { useEffect, useState } from 'react';

const useScreenSizes = () => {
  const windowSize = useWindowSize();
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [IsMdMedium, setIsMdMedium] = useState(false);

  useEffect(() => {
    setIsSmall((windowSize.width as number) >= 640);
    setIsMedium((windowSize.width as number) >= 768);
    setIsMdMedium((windowSize.width as number) >= 976);
  }, [windowSize]);

  return [isSmall, isMedium, IsMdMedium];
};

export default useScreenSizes;
