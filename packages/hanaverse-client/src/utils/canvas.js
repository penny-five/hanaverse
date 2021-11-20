export const selectRandomFrom = (array) => {
  return array[Math.round(Math.random() * (array.length - 1))];
};
