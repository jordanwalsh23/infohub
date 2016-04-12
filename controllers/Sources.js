'use strict';

var url = require('url');


var Sources = require('./SourcesService');


module.exports.sourcesGet = function sourcesGet (req, res, next) {
  Sources.sourcesGet(req.swagger.params, res, next);
};

module.exports.sourcesPost = function sourcesPost (req, res, next) {
  Sources.sourcesPost(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdDelete = function sourcesSourceIdDelete (req, res, next) {
  Sources.sourcesSourceIdDelete(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdGet = function sourcesSourceIdGet (req, res, next) {
  Sources.sourcesSourceIdGet(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdPut = function sourcesSourceIdPut (req, res, next) {
  Sources.sourcesSourceIdPut(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdStatusGet = function sourcesSourceIdStatusGet (req, res, next) {
  Sources.sourcesSourceIdStatusGet(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdStatusPut = function sourcesSourceIdStatusPut (req, res, next) {
  Sources.sourcesSourceIdStatusPut(req.swagger.params, res, next);
};
