const { connect } = require('./client');

let connVar = connect(); 
// Step 2 - Call connect() and then load function into variable
// Step3 in input.js

const setupInput = function() { // set up input
  const stdin = process.stdin; // shorten
  stdin.setRawMode(true); // raw value from console
  stdin.setEncoding('utf8'); // text encoding
  stdin.resume(); 
  stdin.on('data', handleUserInput);
  return stdin;
};

// Step 3 - Access connect and pass input below
const handleUserInput = function(key) {
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  };
  if (key === 'w') {
    connVar.write(`Move: up`);
  };
  if (key === 'a') {
    connVar.write(`Move: left`);
  };
  if (key === 's') {
    connVar.write(`Move: down`);
  };
  if (key === 'd') {
    connVar.write(`Move: right`);
  };
};

// setupInput();

module.exports = { setupInput }