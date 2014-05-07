var fs = require('fs');
var path = require('path');
var http = require('./http-helpers');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  http.serveAssets(res, archive.paths.list);
};
