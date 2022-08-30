/**
 * 12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */
const date = new Date();
console.log(`Current year - ${date.getFullYear()}`);
console.log(`Current Month - ${date.getMonth()}`);
console.log(`Current date - ${date.getDate()}`);
console.log(`Current day - ${date.getDay()}`);
console.log(`Current hours - ${date.getHours()}`);
console.log(`Current minute - ${date.getMinutes()}`);
console.log(date.getSeconds());

let cyear = date.getFullYear();
console.log(cyear);

let numYr = cyear - 1970;
console.log(numYr);
