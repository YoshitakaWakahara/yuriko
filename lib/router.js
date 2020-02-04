'use strict';
const greeting = require('./greeting-handler');
const weather = require('./weather-handler');

function route(req) {
  switch (req) {
    case 'hi':
      return new greeting().greeting;
    case 'chatter':
      return ;
      break;
    case 'dance':
      return ;
      break;
    case 'destiny':
      return ;
      break;
    case 'weather':
      return new weather().weatherData;
    case 'news':
      return ;
      break;
    default:
      break;
  }
}

module.exports = {
  route
}