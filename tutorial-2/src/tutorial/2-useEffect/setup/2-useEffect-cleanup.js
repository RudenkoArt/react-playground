import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', updateSize);

    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', updateSize);
    };
  });

  return (
    <div>
      <h1>window</h1>
      <h2>{size} PXs</h2>
    </div>
  );
};

export default UseEffectCleanup;
