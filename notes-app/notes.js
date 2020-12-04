const fs = require("fs");
const chalk = require("chalk");
const success = chalk.bgGreen.white.bold;
const error = chalk.bgRed.white.bold;

const getNotes = () => "Your notes....";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("title taken");
  }
};

const removeTitle = (title) => {
  const notes = loadNotes();
  const filteredTitle = notes.filter((item) => item.title != title);
  if (notes.length !== filteredTitle.length) {
    console.log(success("Note Removed"));
  } else {
    console.log(error("No note found"));
  }
  saveNotes(filteredTitle);
};

const printNotes = () => {
  const notes = loadNotes();
  console.log(success("YOUR NOTES"));
  notes.map((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const findTheTitle = notes.find((note) => note.title === title);
  if (findTheTitle) {
    console.log(success(findTheTitle.title));
    console.log(findTheTitle.body);
  } else {
    console.log(error("No note found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeTitle, printNotes, readNote };
