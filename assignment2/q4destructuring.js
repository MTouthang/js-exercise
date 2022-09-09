/**
 * Destructuring assignment - The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack
 * values from arrays,or properties from objects, into distinct variables.
 */

const constants = [2.72, 3.14, 9.81, 37, 100];
// - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log("Pi", pi);

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// - Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
console.log("findland - ", fin);

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
// - Destructure the rectangle object by its properties or keys
const { width, height, area, perimeter } = rectangle;
console.log("width-", width);

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
// - Iterate through the users array and get all the keys of the object using destructuring

for (let obj of users) {
  console.log(obj);
}

// - find the persons who have less than two skills
const twoSkils = users.filter((e) => e.skills.length < 2);
console.log(twoSkils[0].name);
