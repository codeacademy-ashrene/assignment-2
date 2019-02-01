const Hapi = require('hapi');
const routes = require('./src/routes');

const server = Hapi.server({
  port: 8080,
  host: 'localhost',
});

server.route(routes);

module.exports = { server };
