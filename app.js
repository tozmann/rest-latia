// import modules
const Express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./server/routes');

// declare constants
const app = new Express();
const port = process.env.PORT || 8080;

// declare middleware
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use('/', Express.static('UI'));

routes(app);

// declare 404 route
app.all('*', (req, res) => res.status(404).json({
  statusCode: 404,
  message: 'The URL you are trying to access does not exist. Please enter a valid url',
}));

// EL SERVIDOR ESTA ESCUCHANDO PETICIONES
const server = http.createServer(app);
server.listen(port, () => console.log(`App listening on port ${port}`));