
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //to print a message upon connecting
  conn.on("connect", () => {
    console.log('Connected to the game server.');
  });

  //write name to the server upon connect
  conn.on("connect", () => {
    conn.write("Name: RAM");
  });

  // Event listener for incoming data
  conn.on("data", (data) => {
    console.log("Incoming data:", data);
  });

  return conn;
};


module.exports = { connect };