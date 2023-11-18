export const getRandomArbitrary = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const mockImage = (width: number, height: number) => {
  return `http://placekitten.com/${width}/${height}?image=${getRandomArbitrary(1, 16)}`;
};
