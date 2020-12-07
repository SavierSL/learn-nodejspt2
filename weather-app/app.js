const functions = require("./utils/utils");

let address = null;
if (process.argv.length === 4) {
  address = `${process.argv[2]} ${process.argv[3]}`;
} else {
  address = `${process.argv[2]}`;
}
console.log(address);
console.log(process.argv);
functions.geocode(address, (error, response) => {
  console.log("Error", error);
  console.log("Data", response);
});

// Destructuring

// const datas = {
//   name: "xavier",
//   age: 22,
//   fav: "Anime",
// };

// const { name, age, fav: favColor, userName = "Xave" } = datas;
// console.log(name);
// console.log(age);
// console.log(favColor);
// console.log(userName);
