const handleUserInput = function(key, conn) {
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

  if (moves[key]) {
    conn.write(moves[key]);
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key, conn);
  });

  return stdin;
};

module.exports = { setupInput };