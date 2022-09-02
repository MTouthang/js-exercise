/**
 * 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 */

let r = prompt("Enter the radius- ");
const pi = 3.14;

let area = pi * r * r;
console.log(area);

let circum = 2 * pi * r;
console.log(circum);
