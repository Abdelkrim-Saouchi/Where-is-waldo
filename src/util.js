export const checkCoordinates = (position, character) => {
  if (
    position.x >= character.minX &&
    position.x <= character.maxX &&
    position.y >= character.minY &&
    position.y <= character.maxY
  ) {
    return true;
  }
  return false;
};
