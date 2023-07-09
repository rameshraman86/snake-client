const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event listener for incoming data
  conn.on("data", (data) => {
    console.log("Incoming data:", data);
  });

  conn.on("connect", () => {
    console.log('connected.');
  });

  return conn;
};


module.exports = { connect };