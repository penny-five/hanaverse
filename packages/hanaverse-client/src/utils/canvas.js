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

const areCoordinatesOverlapping = (grid, newCoordinates, objectWidth, objectHeight) => {
  if (
    grid.includes(newCoordinates) ||
    grid.includes({ x: newCoordinates.x + objectWidth, y: newCoordinates.y }) ||
    grid.includes({ x: newCoordinates.x, y: newCoordinates.y + objectHeight }) ||
    grid.includes({ x: newCoordinates.x + objectWidth, y: newCoordinates.y + objectHeight })
  )
    return true;
  else return false;
};

export const generatePropLocations = (hananoidCount, gridWidth, gridHeight) => {
  const locations = Array(Math.round(Math.random() * hananoidCount > 5 ? 5 : hananoidCount))
    .fill()
    .map((_element, _index, array) => {
      let newCoordinates = generateRandomCoordinates(gridWidth, gridHeight, 2, 2);
      while (areCoordinatesOverlapping(array, newCoordinates, 2, 2))
        newCoordinates = generateRandomCoordinates(gridWidth, gridHeight, 2, 2);
      return newCoordinates;
    });
  return locations;
};

export const generateHananoidLocations = (grid, hananoids, gridWidth, gridHeight) => {
  const locations = hananoids.map((_element, _index, array) => {
    let newCoordinates = generateRandomCoordinates(gridWidth, gridHeight, 1, 1);
    while (grid.includes(newCoordinates) || array.includes(newCoordinates))
      newCoordinates = generateRandomCoordinates(gridWidth, gridHeight, 1, 1);
    return newCoordinates;
  });
  return locations;
};

export const scaleLocationsToCoordinates = (location, tileSize) => {
  return { x: location.x * tileSize, y: location.y * tileSize };
};
