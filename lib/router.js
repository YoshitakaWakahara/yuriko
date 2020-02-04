'use strict';
const greeting = require('./greeting-handler');
const chatter = require('./chatter-handler');
const weather = require('./weather-handler');

function route(req) {
  switch (req) {
    case 'hi':
      return new greeting().greetingPattern;
    case 'chatter':
      return new chatter().chatterResponse;
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