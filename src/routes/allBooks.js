const { allBooksHandler } = require('../handlers/allBooksHandler');

module.exports = [{
  path: '/books',
  method: 'GET',
  handler: allBooksHandler,
}];
