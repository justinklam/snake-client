const net = require('net');
const { IP, PORT } = require('./constants');

// Establishes connection with the game server
const connect = function() { 
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // connection message
  conn.on('connection', (connection) => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: JL`);
  });
 
  // takes input
  conn.on('data', (data) => {
    console.log(`This data was received: ${data}`);
  });

  return conn;
};

module.exports = { connect };