// IMPORTING NODE JS CORE MODULES

// FILE SYSTEM
const fs = require("fs");
fs.writeFileSync("notes.txt", "I am");

// APPEND
fs.appendFileSync("notes.txt", " Xavier San Lorenzo");

//IMPORTING YOUR OWN FILES
const add = require("./utils"); // Load a file
const getNotes = require("./notes");
const sum = add(5, 2);
const printNotes = getNotes();

console.log(printNotes);
console.log(sum);

//IMPORTING NPM MODULES

// NOT ES6
const validator = require("validator"); // Email Validator
console.log(validator.isEmail("sanlorenzo@gmail.com")); // true
console.log(validator.isEmail("sanlorenzo.com")); // false
console.log(validator.isURL("https://fb.com")); // Url validator

// PRINTING COLOR
const chalk = require("chalk");
const success = chalk.bgGreen.white.bold;
const error = chalk.bgRed.white.bold;

console.log(success("success"));
console.log(error("failed"));

// GLOBAL NPM MODULES AND NODEMON
// npm i nodemon -g, addded - g to install in your operating system
console.log(success("working"));

// GETTING INPUT FROM USER

// console.log(
//   process.argv[2]
// );
/* node app.js Xavier 
will output this if no [2] if it has [2] it will show Xavier only
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\User\\Desktop\\learn-node\\notes-app\\app.js',
  'Xavier'
]
*/

// const command = process.argv[2];
// const commandTwo = process.argv[3]; // node app.js Xavier Natsu
// if (command === "add") {
//   console.log("Add your note");
// } else if (command === "remove") {
//   console.log("You can remove an item");
// } else {
//   console.log("No command found");
// }
// console.log(commandTwo); // Natsu

// ARGUMENT PARSING WITH YARGS: part 1
const yargs = require("yargs"); // node app.js add --title='Xavier'
// console.log(yargs.argv); // { _: [ 'add' ], title: 'Xavier', '$0': 'app.js' }
// const one = yargs.argv._;
// const two = yargs.argv.title;
// const three = yargs.argv.$0;
// console.log(one); //["add"];
// console.log(two); //Xavier
// console.log(three); //app.js

// customize yargs version
yargs.version("1.1.0");

//add, remove, read, list

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note");
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "List",
  handler: function () {
    console.log("Listing");
  },
});

//create a read command
yargs.command({
  command: "read",
  describe: "reading",
  handler: function () {
    console.log("Read now");
  },
});
console.log(yargs.argv);

//Argument Parsing with Yargs part 2
