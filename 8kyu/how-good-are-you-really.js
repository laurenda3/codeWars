// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// My solution:
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  for( let i = 0; i < classPoints.length; i++)
      sum += classPoints[i];
  let average = sum / classPoints.length;
  return yourPoints > average;
 if (yourPoints > sum) {
   console.log(true);
 } else {
   console.log(false);
 }
}
betterThanAverage([2,3], 5)