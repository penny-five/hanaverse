export const selectRandomFrom = (array) => {
  return array[Math.round(Math.random() * (array.length - 1))];
};

const generateRandomNumberUnder = (limit) => {
  return Math.round(Math.random() * limit);
};

export const generateRandomCoordinates = (gridWidth, gridHeight, objectWidth, objectHeight) => {
  return {
    x: generateRandomNumberUnder(gridWidth - objectWidth),
    y: generateRandomNumberUnder(gridHeight - objectHeight),
  };
};

const areCoordinatesOverlapping = (grid, newCoordinates) => {
  if (
    grid.includes(newCoordinates) ||
    grid.includes({ x: newCoordinates.x + 1, y: newCoordinates.y }) ||
    grid.includes({ x: newCoordinates.x, y: newCoordinates.y + 1 }) ||
    grid.includes({ x: newCoordinates.x + 1, y: newCoordinates.y + 1 })
  )
    return true;
  else return false;
};

export const generateHananoidLocations = (grid, hananoids, gridWidth, gridHeight) => {
  const locations = hananoids.map((_element, _index, array) => {
    let newCoordinates = generateRandomCoordinates(gridWidth, gridHeight, 1, 1);
    while (
      grid.includes(newCoordinates) ||
      array.includes(newCoordinates) ||
      areCoordinatesOverlapping(grid, newCoordinates, 1, 1) ||
      areCoordinatesOverlapping(array, newCoordinates, 1, 1)
    )
      newCoordinates = generateRandomCoordinates(gridWidth, gridHeight, 1, 1);
    return newCoordinates;
  });
  return locations;
};

export const scaleLocationsToCoordinates = (location, tileSize) => {
  const newLocation = { x: location.x * tileSize, y: location.y * tileSize };
  return newLocation;
};
