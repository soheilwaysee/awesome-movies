const replaceItem = (index, item, arr) => {
  const newArray = [...arr];
  newArray[index] = item;
  return newArray;
};

export default replaceItem;
