const axios = require('axios');

const allRatingsHandler = async (request, h) => {
  const bookId = request.params.id;
  const ratingData = await axios.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${bookId}`).then(response => response.data);
  // h.response(bookData);
  return ratingData;
};


module.exports = { allRatingsHandler };
