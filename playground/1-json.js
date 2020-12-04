const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };
// //Object to JSON
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// //JSON to object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);

// fs.writeFileSync("1-json.json", bookJSON);

// Data buffer
// const dataBuffer = fs.readFileSync("1-json.json");
// /* <Buffer 7b 20 22 74 69 74 6c 65 22 3a 20 22 45 67 6f 20 69 73 20 74 68 65 20 65 6e 65 6d 79 22 2c 20 22 61 75 74 68 6f 72 22 3a 20 22 52 79 61 6e 20 48 6f 6c ... 9 more bytes>*/
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const dataObject = JSON.parse(dataJSON);
const newObject = { ...dataObject, name: "Xavier", age: 22 };
fs.writeFileSync("1-json.json", JSON.stringify(newObject));
