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
  return normalizeNewLineChars(stringNumbers)
      .split(",")
      .map((strNumber) => {
        return parseInt(strNumber);
      })
}

function normalizeNewLineChars(stringNumbers) {
  return stringNumbers.replace(/\n/g, ",");
}

module.exports = add;
