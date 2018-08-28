const axios = require("axios");

let weather = [];
let nextWeather = [];

const getCurrentWeather = (req, res) => {
  console.log(weather);
  res.status(200).json(weather);
};

const getFutureWeather = (req, res) => {
  console.log("current weather: ", weather, "future weather: ", nextWeather);
  res.status(200).json(nextWeather);
};

axios
  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&APPID=0775e148a4e30162a4d99375a3c59b7d"
  )
  .then(response => {
    // console.log(response);
    weather = response.data;
  });

axios
  .get(
    "http://api.openweathermap.org/data/2.5/forecast?q=Dallas&units=imperial&mode=json&APPID=0775e148a4e30162a4d99375a3c59b7d"
  )
  .then(response => {
    // console.log(response);
    nextWeather = response.data;
  });

module.exports = {
  getCurrentWeather,
  getFutureWeather
};
