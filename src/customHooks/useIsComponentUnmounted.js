import { useEffect, useRef } from 'react';

const useIsComponentUnmounted = () => {
  const isComponentUnmounted = useRef(false);
  useEffect(() => {
    return () => {
      isComponentUnmounted.current = true;
    };
  }, []);
  return isComponentUnmounted;
};

export default useIsComponentUnmounted;
