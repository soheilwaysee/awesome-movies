let key = 0;

const getUniqueKey = () => {
  return key++;
};

export default getUniqueKey;
