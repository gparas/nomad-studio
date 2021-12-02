import { useMemo, useRef } from 'react';
import { gsap } from 'gsap';

const useSelector = () => {
  const ref = useRef();
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
};

export default useSelector;
