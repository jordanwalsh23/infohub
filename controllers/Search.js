'use strict';

var url = require('url');


var Search = require('./SearchService');


module.exports.sourcesSearchGet = function sourcesSearchGet (req, res, next) {
  Search.sourcesSearchGet(req.swagger.params, res, next);
};
