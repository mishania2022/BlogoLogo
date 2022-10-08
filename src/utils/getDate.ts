export const getDate = (word: string): any => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  const result =
    word.substring(8, 10) +
    "." +
    word.substring(5, 7) +
    "." +
    word.substring(0, 4) +
    " " +
    word.substring(11, 19);
  return result;
};
