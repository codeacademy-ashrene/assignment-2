const axios = require('axios');

const makeGetRequest = async (bookId) => {
  const data = await axios.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${bookId}`).then(response => response.data);
  return data;
};

module.exports = makeGetRequest;
