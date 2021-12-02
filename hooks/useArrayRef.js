import { useRef } from 'react';

const useArrayRef = () => {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
};

export default useArrayRef;
