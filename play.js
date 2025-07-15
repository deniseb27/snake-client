const { connect } = require('./connect');
const { setupInput } = require('./input');

console.log("Connecting ...");
const connection = connect();

setupInput(connection);