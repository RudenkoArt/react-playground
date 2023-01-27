import React from 'react';

const Book = ({ img, author, title }) => {
  const clickHandler = (e) => {
    alert('Hello world!');
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className='book' onMouseOver={() => {}}>
      <img src={img} alt='' />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>example</button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
