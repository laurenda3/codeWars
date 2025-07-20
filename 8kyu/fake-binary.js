// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My solution:
const fakeBin = x => x.split('').map(d => d < 5 ? '0' : '1').join('')

// Additonal solution:
const fakedBin = x => x.split('').map(digit => Number(digit) < 5 ? '0': '1').join('')
