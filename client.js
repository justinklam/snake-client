const net = require('net');

// Establishes connection with the game server
const connect = function() {  // Step 1 server sets up -> play.js
  const conn = net.createConnection({ // creates the initial connection
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // connection message
  conn.on('connection', (connection) => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: JL`);
  });
  // On connection
  // .on method registers "connect" - then handler (callback function)
  // then moves into the function

  // takes input
  conn.on('data', (data) => {
    console.log(`This data was received: ${data}`);
  });


  return conn;
};

module.exports = { connect };