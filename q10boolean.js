/**
 * 10. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.

 */

// Truthy value --
console.log(null == undefined);
let var1 = "hello";
let var2 = "world";
console.log(typeof var1 === typeof var2);

let isLoggedIn = true;
let isLoggedOut = false;

console.log(isLoggedIn || isLoggedOut);

// Falsy value --
console.log(null === undefined);
console.log(var1 === var2);
console.log(isLoggedIn && isLoggedOut);
