/**
 * 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 */

const countries = [
  "India",
  "Italy",
  "Germany",
  "Ethiopia",
  "Portugal",
  "USA",
  "Pakistan",
];

countries.find((e) => {
  if (e === "Ethiopia") {
    console.log(e.toUpperCase());
  }
});
