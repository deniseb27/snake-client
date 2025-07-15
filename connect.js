const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
return net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");

    // Set snake name
    conn.write("Name: DL"); // replace DDD with your initials

    // Move the snake once
    // conn.write("Move: up"); commented out so snake doesn't move automatically upon connection

    // OR move the snake repeatedly
    // Uncomment this if you want to test constant movement
    /*
    setInterval(() => {
      conn.write("Move: up");
    }, 100); // moves every 100ms
    */
  });

  conn.on('data', (data) => {
    console.log("Server says:", data);
  });

  conn.on('end', () => {
    console.log("Disconnected from server.");
  });

  conn.on('error', (err) => {
    console.log("Connection error:", err.message);
  });

  return conn;
};

module.exports = { connect };