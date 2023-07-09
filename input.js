
// setup interface to handle user input from stdin
const setupInput = function() {
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
};

module.exports = { setupInput };