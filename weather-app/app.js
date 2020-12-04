const functions = require("./utils/utils");

functions.geocode("Naga City", (error, response) => {
  console.log("Error", error);
  console.log("Data", response);
});
