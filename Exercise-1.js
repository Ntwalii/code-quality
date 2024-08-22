const calculateAverage = (numbersArray) => {
  const sumOfNumbers = numbersArray.reduce((acc, element) => acc + element, 0);
  return sumOfNumbers / numbersArray.length;
};
