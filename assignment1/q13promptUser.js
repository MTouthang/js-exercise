/**
 * 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
 */

// var base = prompt("Please enter the base of the triangle");
// let height = prompt("please enter the height of the triangle");

const readline = require("readline");

let base = "";
let hg = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter base-", function (base) {
  base = base;
  console.log("base-", base);
});

rl.question("Enter height-", function (hg) {
  hg = hg;
  console.log("height-", height);
  const areaTriangle = 0.5 * base * hg;

  console.log(areaTriangle);
  rl.close();
});
