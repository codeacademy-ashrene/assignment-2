const { booksAndRatingsHandler } = require('../handlers/booksAndRatingsHandler');

module.exports = [{
  path: '/books/create',
  method: 'POST',
  handler: booksAndRatingsHandler,
}];
