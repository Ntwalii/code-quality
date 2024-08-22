const arraySum = (array) => array.reduce((acc, element) => acc + element, 0);

const calculateMatrixSum = (matrix) => {
  return matrix.reduce((acc, arrayElement) => {
    return acc + arraySum(arrayElement);
  }, 0);
};
