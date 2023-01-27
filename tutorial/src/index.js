import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

// const Greeting = () => {
//   return (
//     <div>
//       <h3>Hello</h3>
//     </div>
//   );
// };

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hello World')
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<Greeting />);
