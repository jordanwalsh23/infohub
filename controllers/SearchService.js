'use strict';

exports.sourcesSearchGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (String)
  * sourceIds (List)
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

