const Joi = require('joi');
const { allRatingsHandler } = require('../handlers/allRatingsHandler');

module.exports = [{
  path: '/books/{id}',
  method: 'GET',
  handler: allRatingsHandler,
  config: {
    validate: {
      params: {
        id: Joi.string().required(),
      },
    },
  },
}];
