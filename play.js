const { connect } = require('./client');

// connecting to server
console.log('Connecting ...');
connect();

const setupInput = function() { // set up input
  const stdin = process.stdin; // shorten
  stdin.setRawMode(true); // raw value from console
  stdin.setEncoding('utf8'); // text encoding
  stdin.resume(); 
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  };
};

setupInput();