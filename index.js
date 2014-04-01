var fs = require('fs');
var request = require('request');
var lingo = {};

fs.readdirSync(__dirname + '/templates').forEach(function(fname) {
  var contents = fs.readFileSync(__dirname + '/templates/' + fname).toString();
  lingo[fname.replace(/.md$/, '')] = contents;
});

module.exports = {
  get: function(name, cb) {
    request(
      'http://rawgithub.com/ionitron-lingo/master/templates/' + name + '.md',
      function(err, response, body) {
        if (err || response.status !== 200) return cb(err);
        cb(null, body);
      }
    );
  }
};

