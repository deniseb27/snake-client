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
    process.exit(); // Ctrl+C exits
  }

  const moves = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  };

  if (moves[key]) {
    conn.write(moves[key]);
  }
});


  return stdin;
};

setupInput(connection);