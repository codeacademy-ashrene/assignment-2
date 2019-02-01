const { pingHandler } = require('../handlers/pingHandler');

module.exports = [{
  path: '/ping',
  method: 'GET',
  handler: pingHandler,
}];
