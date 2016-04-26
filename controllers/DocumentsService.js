'use strict';

exports.sourcesSourceIdDocumentsDocumentIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * documentId (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.sourcesSourceIdDocumentsDocumentIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * documentId (String)
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.sourcesSourceIdDocumentsDocumentIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * documentId (String)
  * document (InfoSourceDocumentRequest)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.sourcesSourceIdDocumentsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.sourcesSourceIdDocumentsPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * document (InfoSourceDocumentRequest)
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

