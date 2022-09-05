/**
 * 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
 */

function sEquation(a, b, c) {
  // with the given equation ax + by + c = 0

  // suppose y is zero
  var x = -c / a;

  // suppose x is zero
  var y = -c / b;
  console.log(x, y);
}

sEquation(5, 3, -30);
