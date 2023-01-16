import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translaled, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranlation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            // TODO: insert API key
            key: '',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranlation();
  }, [language, debouncedText]);
  return (
    <div>
      <h1 className='ui header'>{translaled}</h1>
    </div>
  );
};

export default Convert;
