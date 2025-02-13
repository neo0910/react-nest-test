const getRandomElement = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

export const getRandomUsername = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

  const name = getRandomElement(names);
  const surname = getRandomElement(colors);

  return `${name} ${surname}`;
};
