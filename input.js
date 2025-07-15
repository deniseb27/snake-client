let connection; // holds the TCP connection object

const handleUserInput = (key) => {
  if (key === '\u0003') { // Ctrl+C
    console.log('Exiting game...');
    process.exit();
  }

  const moves = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  };

  const messages = {
    e: "Say: Excited!",
    m: "Say: Move quickly!",
    h: "Say: Hello, LHL friends!",
    b: "Say: Be careful!"
  };

  if (moves[key]) {
    connection.write(moves[key]);
  } else if (messages[key]) {
    connection.write(messages[key]);
  }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
};

module.exports = { setupInput };