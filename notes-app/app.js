// IMPORTING NODE JS CORE MODULES

// FILE SYSTEM
const fs = require("fs");
fs.writeFileSync("notes.txt", "I am");

// APPEND
fs.appendFileSync("notes.txt", " Xavier San Lorenzo");

//IMPORTING YOUR OWN FILES
const add = require("./utils"); // Load a file
const note = require("./notes");
const sum = add(5, 2);
// const printNotes = getNotes();

// console.log(printNotes);
// console.log(sum);

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

// ARGUMENT PARSING WITH YARGS: part 1 //Argument Parsing with Yargs part 2
const yargs = require("yargs"); // node app.js add --title='Xavier'
const { argv } = require("process");
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
  builder: {
    title: {
      describe: "Add title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.removeTitle(argv.title);
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
  builder: {
    title: {
      demandOption: true,
      describe: "Read title",
      type: "string",
    },
  },
  handler: (argv) => {
    note.readNote(argv.title);
  },
});

//print list Notes
yargs.command({
  command: "list",
  describe: "Print List",
  handler: () => {
    note.printNotes();
  },
});

// console.log(yargs.argv); or yargs.parse();
yargs.parse();

// STORING DATA WITH JSON
// IN PLAYGROUND FOLDER

//ADDING A NOTE
