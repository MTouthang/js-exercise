/**
 * 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
 */

let varString = "Hello World!";
let varBool = true;
let varUnd = undefined; // undefined means a variable has been declared but has not yet been assigned a value.
let varNull = null; // null is an assignment value. It can be assigned to a variable as a representation of no value.

// undefined is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything.
// null is a variable that is defined but representing a missing value.

console.log(`
    ${varString} Data types- ${typeof varString}
    ${varBool} Data types- ${typeof varBool}
    ${varUnd} Data types- ${typeof varUnd}
    ${varNull} Data types- ${typeof varNull}
`);
