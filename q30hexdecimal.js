/**
 * Write a script which generates a random hexadecimal number.
 */

// const ranHex = () => {
//   let ranNum = (Math.random() * 0xffffff * 1000000).toString(16);
//   console.log(ranNum);
//   return "#" + ranNum.slice(0, 6);
// };

// console.log(ranHex());

// console.log((0xffffff * 1000000).toString(16));

let items = ["a", "b", "c", "d", "e", "f"];
let item = items[Math.floor(Math.random() * items.length)];
console.log(item);
let random = Math.random().toString().slice(2, 6);
console.log(random);
console.log(`
#${item}${random}${item}
`);
