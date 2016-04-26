'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.authPost = function authPost (req, res, next) {
  Auth.authPost(req.swagger.params, res, next);
};
