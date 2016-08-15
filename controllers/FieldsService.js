'use strict';

exports.sourcesSourceIdFieldsFieldIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * fieldId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.sourcesSourceIdFieldsFieldIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * fieldId (String)
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

exports.sourcesSourceIdFieldsFieldIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * fieldId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.sourcesSourceIdFieldsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * name (String)
  * path (String)
  * fieldType (String)
  * analyse (Boolean)
  * key (Boolean)
  * created (Date)
  * updated (Date)
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

exports.sourcesSourceIdFieldsPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * field (InfoSourceFieldRequest)
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

