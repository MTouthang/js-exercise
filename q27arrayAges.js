/**
 * The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortNum = ages.sort((a, b) => {
  return a - b;
});
console.log(ages.length);

console.log(sortNum);

// min and max
const min = sortNum[0];
const max = sortNum[sortNum.length - 1];
console.log(`
    min - ${min}
    max - ${max}
`);

// median ---
if (sortNum.length % 2 === 0) {
  let medianOneIndex = ages.length / 2;
  let medianTwoIndex = ages.length / 2 + 1;

  let medianOne = sortNum[medianOneIndex];
  let medianTwo = sortNum[medianTwoIndex];

  if (medianOne === medianTwo) {
    console.log("The median is - ", medianOne);
  } else {
    console.log(` 
    The first median - ${medianOne} and
    The second median - ${medianTwo}
    `);
  }
} else {
  let medianIndex = Math.round(ages.length / 2) - 1;
  console.log(medianIndex);
  console.log(sortNum[medianIndex]);
}

// Average --

let sum = 0;

for (const item of ages) {
  sum += item;
}

let average = Math.round(sum / ages.length);
console.log("The average age is -", average);

console.log(`The range is - ${max - min}`);

// absolute ---
let minAverage = Math.abs(min - average);
let maxAverage = Math.abs(max - average);

console.log(` Min Average is - ${minAverage}`);
console.log(` Max Average is - ${maxAverage}`);
