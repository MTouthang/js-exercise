/**
 * 35. Write a functions which checks if all items are unique in the array.
 */

// const strArr = [2, 4, 6, 1, 3, 2];

const strArr = ["apple", "mango", "orange", "graphs"];

if (strArr.length === new Set(strArr).size) {
  console.log("Uniqure Array of items");
} else {
  console.log("not unique items of array");
}
