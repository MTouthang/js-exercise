/**
 *20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
 */

const score = 90;

if (score <= 100 && score >= 80) {
  console.log("A");
} else if (score <= 89 && score >= 70) {
  console.log("B");
} else if (score <= 69 && score >= 60) {
  console.log("c");
} else if (score <= 59 && score >= 50) {
  console.log("D");
} else if (score <= 49 && score > 0) {
  console.log("F");
}
