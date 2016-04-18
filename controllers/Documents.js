'use strict';

var url = require('url');


var Documents = require('./DocumentsService');


module.exports.sourcesSourceIdDocumentsDocumentIdDelete = function sourcesSourceIdDocumentsDocumentIdDelete (req, res, next) {
  Documents.sourcesSourceIdDocumentsDocumentIdDelete(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdDocumentsDocumentIdGet = function sourcesSourceIdDocumentsDocumentIdGet (req, res, next) {
  Documents.sourcesSourceIdDocumentsDocumentIdGet(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdDocumentsDocumentIdPut = function sourcesSourceIdDocumentsDocumentIdPut (req, res, next) {
  Documents.sourcesSourceIdDocumentsDocumentIdPut(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdDocumentsGet = function sourcesSourceIdDocumentsGet (req, res, next) {
  Documents.sourcesSourceIdDocumentsGet(req.swagger.params, res, next);
};

module.exports.sourcesSourceIdDocumentsPost = function sourcesSourceIdDocumentsPost (req, res, next) {
  Documents.sourcesSourceIdDocumentsPost(req.swagger.params, res, next);
};
