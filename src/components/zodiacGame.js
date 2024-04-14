import React, { useRef } from 'react';
import { checkZodiacSign } from '../utils/zodiacUtils';

const InteractiveSection = () => {
  const zodiacSignRef = useRef(null);
  const resultRef = useRef(null);

  const handleZodiacSubmit = () => {
    checkZodiacSign(zodiacSignRef.current.value, resultRef);
  };

  return (
    <section id="interactive-section">
      <h2>Sanrio Character Zodiac Sign Game</h2>
      <p>Find out which Sanrio character you would be based on your Zodiac Sign!</p>
      <label htmlFor="zodiacSign">Enter your Zodiac Sign: </label>
      <input type="text" id="zodiacSign" placeholder="e.g., Aries" ref={zodiacSignRef} />
      <button onClick={handleZodiacSubmit}>Submit</button>
      <p id="result" ref={resultRef}></p>
    </section>
  );
};

export default InteractiveSection;
