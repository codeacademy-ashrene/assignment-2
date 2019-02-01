const axios = require('axios');

const allBooksHandler = async (request, h) => {
  const bookData = await axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks').then(response => response.data.books);
  // h.response(bookData);
  return bookData;
};


module.exports = { allBooksHandler };
