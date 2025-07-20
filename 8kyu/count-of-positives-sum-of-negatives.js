// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution:
function countPositivesSumNegatives(input) {
let posi = 0
let negi = 0
  if (!input || input.length === 0) {
  return [];
  } else {
    input.forEach(num => {
      if (num > 0) {
        posi++
      } else if (num < 0) {
        negi += num
      }
    })
  }
return [posi, negi]

}