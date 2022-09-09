/** TODO:
 * - Explain the difference between forEach, map, filter, and reduce.
- Define a callback function before you use it in forEach, map, filter or reduce.
- Use forEach to console.log each name in the names array.
- Use forEach to console.log each country in the countries array.
- Use forEach to console.log each number in the numbers array.
- Use map to create a new array by changing each country to uppercase in the countries array.
- Use map to create an array of countries length from countries array.
- Use map to create a new array by changing each number to square in the numbers array
- Use map to change to each name to uppercase in the names array
- Use map to map the products array to its corresponding prices.
- Use filter to filter out countries containing land.
- Use filter to filter out countries having six character.
- Use filter to filter out countries containing six letters and more in the country array.
- Use filter to filter out country start with 'E';
- Use filter to filter out only prices with values.
- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
- Use reduce to sum all the numbers in the numbers array.
- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
- Explain the difference between some and every
- Use some to check if some names' length greater than seven in names array
- Use every to check if all the countries contain the word land
- Explain the difference between find and findIndex.
- Use find to find the first country containing only six letters in the countries array
- Use findIndex to find the position of the first country containing only six letters in the countries array
- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
 */

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// -Explain the difference between forEach, map filter and reduce
/**
 * forEach - The forEach() method executes a provided function once for each array element.
 * map - The map() method creates a new array, populated with the results of calling a provided function on every element in the calling array.
 * filter - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 * reduce - The reduce() method executes a reducer function on each element of the array and  returns a single output value
 */

// - Define a callback function before you use it in forEach, map filter or reduce.
/**
 * Callback function - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of
 * routine or action.
 */

// forEach method ----
// - use forEach to console.log each name in the names array.
console.log("Names -");
names.forEach((e) => console.log(`${e}`));

// - use forEach to console.log each country in the countries array.
console.log("Countries - ");
countries.forEach((e) => console.log(e));

// - use forEach to console.log each number in the number array -
console.log("Numbers -");
numbers.forEach((e) => console.log(e));

// map methods ------
// - use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpperCase = countries.map((e) => e.toUpperCase());
console.log(countriesUpperCase);

// - use map to create a new array of counties length from countries array.
const countrlengthArray = countries.map((e) => e.length);
console.log(countrlengthArray);

// - use map to create a new array by changing each number to square in the numbers array
const numSquare = numbers.map((e) => e ** 2);
console.log(numSquare);

// - use map to change to each name to uppercase in the names array
const namesUpp = names.map((e) => e.toUpperCase());
console.log(namesUpp);

// - use map to map the products array to its corresponding prices

const productAndPrice = new Map();
products.forEach((e) => productAndPrice.set(e.product, e.price));
console.log(productAndPrice);

/**
 * filter method ---
 */
//- Use filter to filter out countries containing land.

const countriesLand = countries.filter((e) => {
  return e.toLowerCase().includes("land");
});
console.log(countriesLand);

// - Use filter to filter out countries having six character.
const countriesWithSixChar = countries.filter((e) => e.length === 6);
console.log(countriesWithSixChar);

// - Use filter to filter out countries containing six letters and more in the country array.
const countriesWithMoreSixChar = countries.filter((e) => e.length >= 6);
console.log(countriesWithMoreSixChar);

// - Use filter to filter out country start with "E";
const countriesWithEStart = countries.filter(
  (e) => e.charAt(0).toLowerCase() === "e"
);
console.log("CountriesWithE- ", countriesWithEStart);

// - Use filter to filter out only prices with values.
const productWithPrice = products.filter((e) => typeof e.price === "number");
console.log(productWithPrice);

// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr) {
  const arrString = arr.filter((e) => typeof e === "string");
  return arrString;
}

const ans = getStringLists([1, 2, 3, 4, "one", "two", "three", "four"]);
console.log(ans);

/**
 * reduce method --
 */

//  - Use reduce to sum all the numbers in the numbers array.

const total = 0;
const sumNum = numbers.reduce((prev, value) => prev + value, total);

console.log("Sum of the Number", sumNum);

// - use reduce method to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway and Iceland
// are north European countries.

const concateCountries = countries.reduce((prev, value) => {
  return prev + ", " + value;
});

console.log("concate countries names- ", concateCountries);

/**
 * Explain the difference between some and every --
 * The some() method tests whether at least one element in the array passes the test implemented by the provide function. return true if present else false if not present
 * The every() method tests whether at least all the element in the array passes the test implemented by the provide function. return true if present else false if not present.
 *
 */

// - Use some to check if  some names length greater than seven in names array.
const isLongName = names.some((e) => e.length > 7);
console.log("isLongName-", isLongName);

const isContWithLand = countries.every((e) => e.toLowerCase().includes("land"));
console.log("Does all the country contain 'land' -", isContWithLand);

/**
 * Explain the difference between find and findIndex
 * The findIndex() return the index of the first element that satisfies the provided test function. if no elements satisfy the testing function, -1 is returned.
 * The find() return the first element that satisfies the provided test function. if no elements satisfy the testing function, it return undefined.
 */

// - Use findIndex to find the position of the first country containing only six letters in the countries array.
const countSixLetters = countries.findIndex((e) => e.length === 6);
console.log(
  "The first country with only 6 letters is in index - ",
  countSixLetters
);

// - Use findIndex to find the position of Norway if it doesnt exist in the array you will get -1.
const norWay = countries.findIndex((e) => e === "Norway");
console.log("Index of Norway is -", norWay);

// - Use findIndex to find the position of Russia if it doesnt exist in the array you will get -1
const posRussia = countries.findIndex((e) => e === "Russia");
console.log("Position of Russia in an array is -", posRussia);

/**
 * set - The Set object let you store unique values of any type, whether primitive values or object references -
 */

// - create an empty set
const mySet = new Set();

// c- create a set containing 0 to 10 using loop
for (let i = 1; i <= 10; i++) {
  mySet.add(i);
}
mySet.clear();
console.log(mySet);

const fiveString = ["mango", "apple", "orange", "pineapple", "watermelon"];
const myNewSet = new Set(fiveString);
console.log(myNewSet);

// - Create a map of countries and number of characters of a country.
const myMap = new Map();

myMap.set("IND", "India");
myMap.set("PK", "Pakistan");
myMap.set("USA", "United state");
myMap.set("GE", "Germany");

console.log(myMap);
