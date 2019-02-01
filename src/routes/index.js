const pingRoutes = require('./ping');
const allBooksRoutes = require('./allBooks');
const allRatingsRoutes = require('./allRatings');

module.exports = [
  ...pingRoutes,
  ...allBooksRoutes,
  ...allRatingsRoutes,
];
