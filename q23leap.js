/**
 * 23. Write a program which tells the number of days in a month, now consider leap year.
 */

let monthInNumber = 2;
let isLeap = 1996 % 4 === 0;
console.log(isLeap);

if (monthInNumber < 8 && monthInNumber % 2 != 0 && monthInNumber != 2) {
  console.log(`Number of Days in ${monthInNumber} Month of the year is 31`);
} else if (monthInNumber === 2 && isLeap === true) {
  console.log(`Number days in ${monthInNumber} Month of the year is 29`);
} else if (monthInNumber === 2 && isLeap === false) {
  console.log(`Number days in ${monthInNumber} Month of the year is 28`);
} else if (monthInNumber > 8 && monthInNumber % 2 != 0) {
  console.log(`Number of Days in ${monthInNumber} month of the year is 30`);
} else {
  console.log(`Number of Days in ${monthInNumber} month of the year is 31`);
}
