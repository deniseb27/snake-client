const { connect } = require('./connect');

console.log("Connecting ...");
const connection = connect();

// function to set up input from stdin

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exiting game...');
    process.exit();
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // raw mode
  stdin.setEncoding('utf8'); // utf8 encoding
  stdin.resume(); // resume stdin so program can listen for input
  return stdin; // return stdin object so we can use it elsewhere in program

  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit(); // Ctrl+C exits
    }
  });



  const moves = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  };

  if (moves[key]) {
    conn.write(moves[key]);
  }
};

setupInput(connection);