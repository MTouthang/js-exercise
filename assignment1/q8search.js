/**
 * 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
 */

const str =
  "You cannot end a sentence with because because because is a conjunction";
const word = "because";

const res = str.search(word);
console.log(res);