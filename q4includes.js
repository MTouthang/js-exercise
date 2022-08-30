/**
 * 4. Check if the string contains a word Script using includes() method.
 */
let str = "JavaScript is a single  threaded langauge";

let word = "threaded";

console.log(
  ` The word - ${word} ${
    str.includes(word) ? "is present" : "is not present"
  }  in the given sentence`
);
