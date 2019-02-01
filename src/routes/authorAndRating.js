const { authorAndRatingHandler } = require('../handlers/authorAndRatingHandler');

module.exports = [{
  path: '/books/ratings',
  method: 'GET',
  handler: authorAndRatingHandler,
}];
