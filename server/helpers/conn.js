const { Client } = require('pg')
const setup = require('../config/config');

const connection = () => {
  const config = setup.productionDB;
  const client = new Client(config);
  return client;
};

module.exports = connection;
