'use strict';
const fs = require('fs');
const csv = require('csv');
const request = require('request');
const APIKEY = '9a485cafe647604d3d3df736872e81fd';
const CurrentWeatherURL = 'http://api.openweathermap.org/data/2.5/weather/';
const ForecastWeatherURL = 'http://api.openweathermap.org/data/2.5/forecast/';


module.exports = class weather {
  constructor() {
    this.getCurrentWeatherData()
    .then(result => this.makeCurrentWeatherResponse(result));
  }

  //Get current weather data from API
  //TODO using lat lng
  //GinzaSix lat 35.66 lng 139.76
  getCurrentWeatherData() {
    const currentWeather = new Object();
    request(CurrentWeatherURL + `?lat=35.66&lon=139.76&` + '&units=metric' + `&appid=${APIKEY}`, (error, response, body) => {
      const currentWeather = JSON.parse(body);
      currentWeather['weather'] = currentWeather.weather[0].main;
      currentWeather['temp'] = currentWeather.main.temp;
      currentWeather['temp_min'] = currentWeather.main.temp_min;
      currentWeather['temp_max'] = currentWeather.main.temp_max;
      currentWeather['humidity'] = currentWeather.main.humidity;
      console.log(currentWeather);
    })
      return currentWeather;
  }
  //Add comment
  makeCurrentWeatherResponse(currentWeatherObj) {
    let weatherJa = '';
    switch (currentWeatherObj.weather) {
      case 'Crear':
        weatherJa = '本日は快晴です♪気持ちのいいお天気ですね♪どこかにお出かけしませんか♪';
      case 'Clouds':
        weatherJa = '今日は曇りです！何かが起こりそうな気がします♪';
      case 'Rain':
        weatherJa = '本日は雨です！ちょっと気分が落ち込んできますね...こんな日はお部屋で読書に限ります♪';

        console.log(weatherJa);
        return 'プロデューサーさん、本日の天気予報をお伝えしちゃいますね♪ ' + `${weatherJa}`;
    }
  }
  //Get weather foreast from API
  getForecastWeatherData() {
    request(ForecastWeatherURL + `?q=Tokyo&` + `&appid=${APIKEY}`, (error, response, body) => {
      console.log('statusCode: ' + response.statusCode);
      const forecastWeather = JSON.parse(body);

      console.log(forecastWeather.list[0].weather);
      console.log(forecastWeather.list[1].weather);
      for (let i = 0; i < forecastWeather.list.length; i++) {
        console.log(i + ' : ' + JSON.stringify(forecastWeather.list[i].weather));
      };
    })
  }
  //CurrentWeather
  //Response pattern 
  //weather.main : Clear, Clouds, Rain
  //最低気温、最高気温、体感温度、湿度
  //ForecastWeather
}