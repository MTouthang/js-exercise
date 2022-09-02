/**
 * 22. Write a program which tells the number of days in a month.
 */

let monthInNumber = 9;

if (monthInNumber < 8 && monthInNumber % 2 != 0 && monthInNumber != 2) {
  console.log(`Number of Days in ${monthInNumber} Month of the year is 31`);
} else if (monthInNumber === 2) {
  console.log(
    `Number days in ${monthInNumber} Month of the year is either 28 or 29`
  );
} else if (monthInNumber > 8 && monthInNumber % 2 != 0) {
  console.log(`Number of Days in ${monthInNumber} month of the year is 30`);
} else {
  console.log(`Number of Days in ${monthInNumber} month of the year is 31`);
}
