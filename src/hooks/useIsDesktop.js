// src/hooks/useIsDesktop.js
import { useState, useEffect } from 'react';

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1080);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1080);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
}
