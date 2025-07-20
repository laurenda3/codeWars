// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// My solutions:

function grow(x){
  let product = 1;
  for (let i = 0; i < x.length;  i++)
  product = product * x[i]
  return product

}
console.log(grow([1, 2, 3, 4]));

// Alternatively, using reduce:
const grow = x => x.reduce((a, b) => a * b)

