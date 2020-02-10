'use strict';
const router = require('./lib/router');

//ToDo change func name
function getResponse(req, userID) {
  //ToDo Delete
  //console.log(req);
  return router.route(req, userID);
}
//ToDo Delete
//getResponse('hi');
getResponse('weather');
//getResponse('chatter');
//getResponse('cute');

module.exports = {
  getResponse
}