const createQuery = require('./tables.create');
const destroyQuery = require('./db.destroy');
const connection = require('../helpers/conn');
const password = require('../helpers/password');

const client = connection();
client.connect();

const userPassword = password.passwordHash('gemshare,php1989@');
const adminQuery = `INSERT INTO users(firstname, lastname, email, role, password) VALUES 
('Sharerudite', 'Essien', 'sharerudite@gmail.com', 1, '${userPassword}') RETURNING *;`;


const dbQueries = `${destroyQuery}${createQuery}${adminQuery}`;

client.query(dbQueries, () => {
  client.end();
});
