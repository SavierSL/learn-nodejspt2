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
