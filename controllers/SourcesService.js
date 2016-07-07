'use strict';

exports.sourcesGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * description (String)
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

exports.sourcesPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * source (InformationSourceRequest)
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

exports.sourcesSourceIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.sourcesSourceIdGet = function(args, res, next) {
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

exports.sourcesSourceIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sourceId (String)
  * source (InformationSourceRequest)
  **/
  // no response value expected for this operation
  res.end();
}

exports.sourcesSourceIdStatusGet = function(args, res, next) {
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

exports.sourcesSourceIdStatusPut = function(args, res, next) {
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

