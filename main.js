function add(stringNumbers) {
  if (stringNumbers === undefined || stringNumbers.length === 0) {
    return 0;
  }
  
  let numbers = stringArrayToNumbers(stringNumbers);
  
  return numbers.reduce((acc, number) => {
    return acc + number;
  })
}

function stringArrayToNumbers(stringNumbers) {
  let delimiter = stringNumbers[1];
  let headerLessStringNumbers = stringNumbers.slice(3, -1);
  
  return headerLessStringNumbers
      .split(delimiter)
      .map((strNumber) => {
        return parseInt(strNumber);
      })
}

module.exports = add;
