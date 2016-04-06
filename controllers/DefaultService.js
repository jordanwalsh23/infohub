'use strict';

exports.sourcesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * type (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "license" : "aeiou",
  "visibility" : "aeiou",
  "name" : "aeiou",
  "type" : "aeiou",
  "url" : "aeiou",
  "authentication" : {
    "password" : "aeiou",
    "apikey" : "aeiou",
    "authentication" : "aeiou",
    "username" : "aeiou"
  }
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.sourcesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * source (InformationSource)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

