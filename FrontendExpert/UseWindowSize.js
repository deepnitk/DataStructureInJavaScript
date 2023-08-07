import React from 'react';

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  
  useEffect(() => {
    const updateWindowSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);
  
  
  return {
    width,
    height
  }
  
}

// Do not edit the line below.
exports.useWindowSize = useWindowSize;
