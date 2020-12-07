// const request = require("request");

// const url = "Your Api";

// request({ url: url, json: true }, (error, response) => {
//   const data = response.body.currently;
// });
// An HTTP Request challenge
// GeoCoding service
// Address -> Lat/Long -> weather

const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2F2aWVyc2wiLCJhIjoiY2tpOXltOHo5MDJvMTJ5czM5ZmVlM3V2ZyJ9.GJd4y2ZhUxQqdkVKVsCWmg`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to get the data", undefined);
    } else {
      //   callback(error, () => {
      //     const latitude = response.body.features[0].center[0];
      //     const longitude = response.body.features[0].center[1];
      //     console.log(latitude);
      //     console.log(longitude);
      callback(error, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

// geocode("philippines", (error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     response();
//   }
// });

module.exports = { geocode };
// // CAllBACK

// const geocode = (place, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Ph", (data) => {
//   console.log(data);
// });
// // ADD callback
// const add = (one, two, callback) => {
//   setTimeout(() => {
//     const total = one + two;
//     callback(total);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum);
// });
