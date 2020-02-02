'use strict';
const greeting = require('./greeting-handler');

function route(req) {
  switch (req) {
    case 'hi':
      const res = new greeting().greeting;
      //console.log(res);
      return res;
      break;
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
      return ;
      break;
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