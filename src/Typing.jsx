import React, { useState, useEffect } from 'react';

function TypingAnimation() {
  const [text] = useState('Welcome to Bear Huddle!');
  const [index, setIndex] = useState(0);
  const [speed] = useState(100);

  useEffect(() => {
    if (index === text.length) {
      return;
    }

    const interval = setInterval(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return (
    <p
      style={{
        fontSize: '24px',
        fontWeight: 400,
        color: '#000000',
        fontFamily: 'Urbanist',
      }}
    >
      {text.slice(0, index)}
    </p>
  );
}

export default TypingAnimation;
