// hooks/useRandomBackgroundColor.js
import { useState, useEffect } from 'react';

const useRandomBackgroundColor = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    const generateRandomColor = () => {
      const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`; // HSL color
      return randomColor;
    };

    setColor(generateRandomColor());
  }, []);

  return color;
};

export default useRandomBackgroundColor;
