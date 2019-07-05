const getKeyCallback = () => {
  let key = 0;

  return () => {
    return key++;
  };
};

const getKey = getKeyCallback();

export default getKey;
