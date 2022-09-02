/**
 * 17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
 */

const date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hr = date.getHours();
let mm = date.getMinutes();

console.log(`${year}-${month}-${day}  ${hr}:${mm}`);
console.log(`${day}-${month}-${year}  ${hr}:${mm}`);
console.log(`${day}/${month}/${year}  ${hr}:${mm}`);
