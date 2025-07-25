   /* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

const bmi = (weight, height) => {
  const result = weight / (height ** 2)
  if (result <= 18.5) {
    return 'Underweight'
  } else if ( result  > 18.5 && result <= 25 ) {
    return 'Normal'
  } else if (result > 25 &&  result <= 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}