const pingRoutes = require('./ping');
const allBooksRoutes = require('./allBooks');
const allRatingsRoutes = require('./allRatings');
const authorAndRatingRoutes = require('./authorAndRating');
const booksAndRatingsRoutes = require('./booksAndRatings');
const bookLikeStatusRoutes = require('./bookLikeStatus');

module.exports = [
  ...pingRoutes,
  ...allBooksRoutes,
  ...allRatingsRoutes,
  ...authorAndRatingRoutes,
  ...booksAndRatingsRoutes,
  ...bookLikeStatusRoutes,
];
