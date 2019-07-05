const replaceImmutableList = (
  startIndex,
  currentArray,
  replaceArray,
  length
) => {
  const newItems = [...currentArray];
  let j = 0;
  const endIndex = startIndex + length;
  for (let i = startIndex; i < endIndex; i += 1) {
    newItems[i] = replaceArray[j];
    j += 1;
  }
  return newItems.filter(item => item);
};

export default replaceImmutableList;
