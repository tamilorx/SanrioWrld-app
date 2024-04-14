export function checkZodiacSign(zodiacSign, resultRef) {
    const zodiacCharacterMapping = {
      "aries": "Hello Kitty",
      "taurus": "My Melody",
      "gemini": "Keroppi",
      "cancer": "Pompompurin",
      "leo": "Badtz-Maru",
      "virgo": "Cinnamoroll",
      "libra": "Chococat",
      "scorpio": "Kuromi",
      "sagittarius": "Little Twin Stars",
      "capricorn": "Hangyodon",
      "aquarius": "Patty & Jimmy",
      "pisces": "Aggretsuko"
    };
  
    const zodiacSignValue = zodiacSign.toLowerCase();
    if (zodiacCharacterMapping.hasOwnProperty(zodiacSignValue)) {
      const result = `Based on your Zodiac Sign (${zodiacSignValue}), you would be ${zodiacCharacterMapping[zodiacSignValue]}!`;
      resultRef.current.textContent = result;
    } else {
      const result = "Sorry, we couldn't find a Sanrio character for the entered Zodiac Sign.";
      resultRef.current.textContent = result;
    }
  }
  

  