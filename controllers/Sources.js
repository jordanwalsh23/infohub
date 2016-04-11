'use strict';

var url = require('url');


var Sources = require('./SourcesService');


module.exports.sourcesGET = function sourcesGET (req, res, next) {
  Sources.sourcesGET(req.swagger.params, res, next);
};

module.exports.sourcesPOST = function sourcesPOST (req, res, next) {
  Sources.sourcesPOST(req.swagger.params, res, next);
};
