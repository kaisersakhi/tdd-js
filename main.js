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
  let delimiter;
  let headerLessStringNumbers;
  
  if (isHeaderPresent(stringNumbers)) {
    delimiter = stringNumbers[2];
    headerLessStringNumbers = stringNumbers.split("\n")[1];
  } else {
    delimiter = ","
    headerLessStringNumbers = normalizeNewLineChars(stringNumbers);
  }
  
  let numbers = headerLessStringNumbers
      .split(delimiter)
      .map((strNumber) => {
        return parseInt(strNumber);
      });
  
  checkNegativeNumbers(numbers);
  
  return numbers;
}

function normalizeNewLineChars(stringNumbers) {
  return stringNumbers.replace(/\n/g, ",");
}

function isHeaderPresent(stringNumbers) {
  return stringNumbers.includes("//");
}

function checkNegativeNumbers(numbers) {
  let negativeNumbers = numbers.filter((number) => number < 0)
  
  if (negativeNumbers.length > 0) {
    throw new RangeError("negative numbers not allowed " + negativeNumbers.join(","));
  }
}

module.exports = add;
