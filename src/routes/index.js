const pingRoutes = require('./ping');
const allBooksRoutes = require('./allBooks');
const allRatingsRoutes = require('./allRatings');
const authorAndRatingRoutes = require('./authorAndRating');

module.exports = [
  ...pingRoutes,
  ...allBooksRoutes,
  ...allRatingsRoutes,
  ...authorAndRatingRoutes,
];
