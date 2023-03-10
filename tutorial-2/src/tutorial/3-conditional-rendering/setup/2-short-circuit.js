import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'jonh doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>error...</h1>}
      {isError ? (
        <h1>there is an error!!!</h1>
      ) : (
        <div>
          <h1>there is no error</h1>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
