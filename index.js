var request = require('request');

module.exports = {
  get: function(name, cb) {

    var customMessage = name.match( /"(.*?)"/ );

    if( customMessage && customMessage.length > 1 ) {
      // if the name is surrounded by double quotes then its a
      // custom message and not a template
      cb(null, customMessage[1]);
      return;
    }

    request(
      'https://raw.github.com/driftyco/ionitron-lingo/master/templates/' + name + '.md',
      function(err, response, body) {
        if (err || response.statusCode !== 200) return cb(true);
        cb(null, body);
      }
    );
  }
};

