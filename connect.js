const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DL");

    // test movement commands
    conn.write("Move: up");
    conn.write("Move: left");
    conn.write("Move: down");
    conn.write("Move: right");
  });

  return conn;
};

module.exports = { connect };