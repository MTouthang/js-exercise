/**
 * Closure - a closure is the combination of a function bundled together(enclosed) with references to its surrounding state.
 * simply - a closure gives you access to an outer function  scope from an inner function.
 */

// - Create a closure one inner function
function init() {
  let name = "me";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

// - Create a closure which one two inner function
function fullName() {
  let firstName = "Mamang";
  function first() {
    console.log(firstName);
    let lastName = "Touthang";
    function last() {
      console.log(lastName);
    }
    last();
  }

  first();
}
fullName();
