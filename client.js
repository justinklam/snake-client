const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // connection message
  conn.on('connect', (connect) => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: JL`);
    // conn.write(`Move: up`);
  });

  // takes input
  conn.on('data', (data) => {
    console.log(`This data was received: ${data}`);
  });

  return conn;
};

module.exports = { connect }

  // conn.on(process.stdin.on)(keypress, (key) => {
  //   if (key === 'w') {
  //     console.log(`Return ${key}`)
  //   }
  //   if (key === 's') {
  //     console.log(`Return ${key}`)
  //   }
  //   if (key === 'a') {
  //     console.log(`Return ${key}`)
  //   }
  //   if (key === 'd') {
  //     console.log(`Return ${key}`)
  //   }
  // });