import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <Link to='/pagetwo'>Navigate to page 2</Link>
      Page 1
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <Link to='/'>Navigate to page 1</Link>
      Page 2<button>Click Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={PageOne} />
          <Route path='/pagetwo' component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
