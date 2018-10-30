'use strict';

const riot = require('riot-compiler');
const through2 = require('through2').obj;
const _ = require('lodash');

module.exports = function(opts = {}) {

  _.merge(riot, opts);
  
  return through2(function(file, enc, callback) {

    if (file.isNull()) return callback(null, file);
    if (file.isStream()) return callback(new Error('gulp-riot3: Streaming not supported'));

    file.contents = Buffer.from(riot.compile(file.contents.toString(), null, file.path));

    callback(null, file);
    
  });
}