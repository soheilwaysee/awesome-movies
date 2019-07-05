export const setItemLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {}
};

export const getItemLocalStorage = key => {
  let item;
  try {
    item = localStorage.getItem(key);
  } catch (error) {}
  return item;
};
