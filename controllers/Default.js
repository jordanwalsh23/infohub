'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.sourcesGET = function sourcesGET (req, res, next) {
  Default.sourcesGET(req.swagger.params, res, next);
};

module.exports.sourcesPOST = function sourcesPOST (req, res, next) {
  Default.sourcesPOST(req.swagger.params, res, next);
};
