/**
 * 24. Create a separate countries.js file and store the countries array in to this file,
 * create a separate file web_techs.js and store the webTechs array in to this file.
 * Access both file in main.js file
 */

// import countries from "./coutries";
// import webTechs from "./web_techs";

const count = require("./coutries");
const web = require("./web_techs");

console.log(count);
console.log(web);
