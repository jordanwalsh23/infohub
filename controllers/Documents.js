'use strict';

var url = require('url');


var Documents = require('./DocumentsService');


module.exports.sourcesSourceIdDocumentsGet = function sourcesSourceIdDocumentsGet (req, res, next) {
  Documents.sourcesSourceIdDocumentsGet(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdDocumentsPost = function sourcesSourceIdDocumentsPost (req, res, next) {
  Documents.sourcesSourceIdDocumentsPost(req.swagger.params, res, next);
};
