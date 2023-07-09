//main file to launch game client

const { connect } = require('./client');


// establishes a connection with the game server
console.log("Connecting ...");
connect();