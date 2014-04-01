var request = require('request');

module.exports = {
  get: function(name, cb) {
    request(
      'https://raw.github.com/driftyco/ionitron-lingo/master/templates/' + name + '.md',
      function(err, response, body) {
        if (err) return cb(true);
        cb(null, body);
      }
    );
  }
};

