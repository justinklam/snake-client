const { connect } = require('./client');

let connVar = connect(); 
// Step 2 - Call connect() and then load function into variable

let connection;

const setupInput = function(conn) { // set up input
  connection = conn;
  const stdin = process.stdin; // shorten
  stdin.setRawMode(true); // raw value from console
  stdin.setEncoding('utf8'); // text encoding
  stdin.resume(); 
  stdin.on('data', handleUserInput);
  return stdin;
};

// Step 3 - Access connect and pass input below
const handleUserInput = function(key) {
  // console.log(key); // track input
  if (key === '\u0003') {
    process.exit();
  };
  if (key === 'w') {
    console.log(`Up`)
    connVar.write(`Move: up`);
  };
  if (key === 'a') {
    console.log(`Left`)
    connVar.write(`Move: left`);
  };
  if (key === 's') {
    console.log(`Down`)
    connVar.write(`Move: down`);
  };
  if (key === 'd') {
    console.log(`Right`)
    connVar.write(`Move: right`);
  };
  if (key === 'q') {
    connVar.write("Say: haha!");
  };
  if (key === 'e') {
    connVar.write("Say: I Win!");
  };
};

module.exports = { setupInput }