const https = require("https");

const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/abella.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2F2aWVyc2wiLCJhIjoiY2tpOXltOHo5MDJvMTJ5czM5ZmVlM3V2ZyJ9.GJd4y2ZhUxQqdkVKVsCWmg";

const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });
  response.on("end", () => {
    const finalData = JSON.parse(data);
    console.log(finalData);
  });
});
request.on("error", (error) => {
  console.log("An error", error);
});
request.end();
