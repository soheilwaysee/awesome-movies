const isValidDate = date => date instanceof Date && !isNaN(date);

const getYear = date => {
  if (!isValidDate(date)) {
    return false;
  }

  return new Date(date).getFullYear();
};

export default getYear;
