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
  return stringNumbers
      .split(",")
      .map((strNumber) => {
        return parseInt(strNumber);
      })
}

module.exports = add;
