'use strict';
const router = require('./lib/router');

//ToDo change func name
function getResponse(req) {
  //ToDo Delete
  console.log(req);
  return router.route(req);
}
//ToDo Delete
//getResponse('hi');
//getResponse('weather');
getResponse('chatter');

module.exports = {
  getResponse
}