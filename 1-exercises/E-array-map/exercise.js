// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// let numbersMultipliedByOneHundred = numbers.map(function multiplyByHun(numbers) {
//  return numbers * 100;
// }); 

// let numbersMultipliedByOneHundred = numbers.map(function (numbers) {
  // return numbers * 100;
// }); 

// let numbersMultipliedByOneHundred = numbers.map( numbers => {
  // return numbers * 100;
// }); 

let numbersMultipliedByOneHundred = numbers.map( numbers => numbers * 100); // complete this statement

console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/