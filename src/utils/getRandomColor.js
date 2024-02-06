/**
 * Array of Tailwind CSS color classes.
 * @type {string[]}
 */
let arrayOfColors = [
  'primary-green',
  'primary-orange',
  'primary-blue',
  'primary-gray',
  'primary-red',
];

/**
 * Returns a random color from the arrayOfColors array and removes it from the array.
 * If all colors have been used, it resets the array.
 * @returns {string} The selected color.
 */
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * arrayOfColors.length);
  const selectedColor = arrayOfColors[randomIndex];

  // Remove the selected color from the array
  arrayOfColors = arrayOfColors.filter((color) => color !== selectedColor);

  // If all colors have been used, reset the array
  if (arrayOfColors.length === 0) {
    arrayOfColors = [
      'primary-green',
      'primary-orange',
      'primary-blue',
      'primary-gray',
      'primary-red',
    ];
  }
  return selectedColor;
};

export default getRandomColor;
