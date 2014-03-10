# streamtee

## tee(stream1, stream2, ..)

Returns a through stream that is piped to a list of streams passed as arguments.

## Usage:

    var tee = require('streamtee');

    sourceStream.pipe(tee(destStream1, destStream2)).pipe(destStream3);

## Installation:

    npm install streamtee