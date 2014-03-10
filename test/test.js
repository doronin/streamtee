var test = require('tap').test,
    fs = require('fs'),
    tee = require('../');

test('tee works', function(t) {
  t.plan(4);

  fs.createReadStream('assets/in').pipe(tee(
    fs.createWriteStream('assets/out1'),
    fs.createWriteStream('assets/out2')
  )).pipe(fs.createWriteStream('assets/out3')).on('close', function() {
    t.ok(fs.existsSync('assets/out1'), 'assets/out1 created');
    t.equal(fs.readFileSync('assets/out1').toString(), 'test', 'assets/out1 has correct data');
    t.ok(fs.existsSync('assets/out2'), 'assets/out2 created');
    t.ok(fs.existsSync('assets/out3'), 'assets/out3 created');
    t.end();
  });
});

setTimeout(function() {
  fs.unlinkSync('assets/out1');
  fs.unlinkSync('assets/out2');
  fs.unlinkSync('assets/out3');
  process.exit(0);
}, 1000);