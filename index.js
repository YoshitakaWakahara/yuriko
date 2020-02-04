'use strict';
const router = require('./lib/router');

//ToDo change func name
function getResponse(req) {
  console.log(req);
  return router.route(req);
}
//ToDo Delete
getResponse('hi');
//getResponse('weather');

module.exports = {
  getResponse
}