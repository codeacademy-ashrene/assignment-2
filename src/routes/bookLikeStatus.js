const { bookLikeStatusHandler } = require('../handlers/bookLikeStatusHandler');

module.exports = [{
  path: '/books/{id}/{likeStatus}',
  method: 'GET',
  handler: bookLikeStatusHandler,
}];
