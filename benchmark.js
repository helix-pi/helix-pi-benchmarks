var glob = require('glob');

function displayBenchmark (benchmark) {
  return function (filename) {
    console.log(filename);

    benchmark(filename);

    console.log('\n');
  };
}

function requireFile (filename) {
  return require(filename);
}

function stripExtension (filename) {
  return filename.replace('.js', '');
}

glob(__dirname + '/benchmarks/**/*.js', function (er, files) {
  files.map(stripExtension).forEach(displayBenchmark(requireFile));
});

