// Instructions

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My solution:
const sumMix = x => x.reduce((sum,curr) => sum + Number(curr), 0)
