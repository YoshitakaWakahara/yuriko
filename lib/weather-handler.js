'use strict';
const fs = require('fs');
const csv = require('csv');
const request = require('request');
const APIKEY = 'xxxxxxxx';
const BASEURL = 'http://api.openweathermap.org/data/2.5/forecast/';


module.exports = class weather {
  constructor() {
    this.weatherData = this.getWeatherData();
    console.log(this.weatherData);
  }

  //Get data from weather API
  getWeatherData() {
    /*
    request('http://www.google.com', (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
    */
    //https://samples.openweathermap.org/data/2.5/forecast/hourly?q=München,DE&appid=b6907d289e10d714a6e88b30761fae22
    request(BASEURL + `hourly?q=London,us` + `&appid=${APIKEY}`, (error, response, body) => {
      console.log(BASEURL + `hourly?q=London,us` + `&appid=${APIKEY}`)
      console.log('statusCode:', response.statusCode);
    })
  }
}
