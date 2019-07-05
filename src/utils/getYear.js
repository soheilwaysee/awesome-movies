const isValidDate = date => date instanceof Date && !isNaN(date);

const getYear = date => {
  if (!isValidDate) {
    return false;
  }

  return new Date(date).getFullYear();
};

export default getYear;
