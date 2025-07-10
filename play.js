const { connect } = require('./connect');

console.log("Connecting ...");
const connection = connect();

// function to set up input from stdin

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }

    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
  });

  return stdin;
};

setupInput(connection);