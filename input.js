
// Stores the active TCP connection object.
let conn;

// setup interface to handle user input from stdin
const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


//defines what shold happen when "data: " is received from stdin
const handleUserInput = (key) => {
  // exit if user presses CTRL + C
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    conn.write("Move: up");
    conn.write("Say: 'gobble gobble gobble!!!!")
  }
  if (key === 'a') {
    conn.write("Move: left");
    conn.write("Say: 'LEFT!!!")
  }
  if (key === 's') {
    conn.write("Move: down");
  }
  if (key === 'd') {
    conn.write("Move: right");
  }


};

module.exports = { setupInput };