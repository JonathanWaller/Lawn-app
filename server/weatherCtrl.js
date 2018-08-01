import axios from "axios";

let weather = [];

// axios.get();

axios
  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&APPID=0775e148a4e30162a4d99375a3c59b7d"
  )
  .then(response => {
    // console.log(response);
    weather = response.data;
  });
