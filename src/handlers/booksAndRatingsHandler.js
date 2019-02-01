const axios = require('axios');
const makeGetRequest = require('../utils/makeGetRequest');
const model = require('../../models');

const booksAndRatingsHandler = async (request, h) => {
  const bookData = await axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks').then(response => response.data.books);
  const noOfBooks = bookData.length;

  const bookRatings = [];
  for (let index = 0; index < noOfBooks; index += 1) {
    bookRatings[index] = makeGetRequest(bookData[index].id);
  }
  // const bookRatings = bookData.forEach((book) => {
  //   const ratingData = makeGetRequest(book.id);
  //   return ratingData;
  // });
  const bookRatingsCollection = await Promise.all(bookRatings);

  const authorAndRatingData = [];
  const books = [];
  for (let index = 0; index < noOfBooks; index += 1) {
    // authorAndRatingData[index] = {
    const author = bookData[index].Author;
    const id = bookData[index].id;
    const name = bookData[index].Name;
    const rating = bookRatingsCollection[index].rating;
    // };
    books[index] = model.Book.generate(author, id, name, rating);
  }
  const bookDetails = await Promise.all(books);
  const response = {
    message: 'CREATED ENTRIES SUCCESSFULLY',
    statusCode: 200,
  };
  return response;
};

module.exports = { booksAndRatingsHandler };
