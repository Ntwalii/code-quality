const calculateAverage = (numbersArray) => {
  return numbersArray.reduce((acc, element) => acc + element, 0) / numbersArray.length;;
};
