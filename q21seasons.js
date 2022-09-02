/**
 * 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */

let userInput = "December";

if (
  userInput === "September" ||
  userInput === "November" ||
  userInput === "October"
) {
  console.log("The season is Autumn");
} else if (
  userInput === "December" ||
  userInput === "Janaury" ||
  userInput === "February"
) {
  console.log("The season is Winter");
} else if (
  userInput === "March" ||
  userInput === "April" ||
  userInput === "May"
) {
  console.log("The season is Summer");
}
