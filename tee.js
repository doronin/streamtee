var stream = require('stream');

function tee() {
  var streams = [].slice.call(arguments),
      pass = new stream.PassThrough();

  streams.forEach(function(destination) {
    pass.pipe(destination);
  });

  return pass;
}

module.exports = tee;