const axios = require('axios');
const makeGetRequest = require('../utils/makeGetRequest');
const model = require('../../models');

const bookLikeStatusHandler = async (request, h) => {
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
  for (let index = 0; index < noOfBooks; index += 1) {
    // authorAndRatingData[index] = {
    const author = bookData[index].Author;
    const id = bookData[index].id;
    const name = bookData[index].Name;
    const rating = bookRatingsCollection[index].rating;
    // };
    if (id == Number(request.params.id)) {
      const books = await model.Book.generate(author, request.params.id, name, rating, request.params.likeStatus);
    }
  }
  // const bookDetails = await Promise.all(books);
  return bookRatingsCollection;
};

module.exports = { bookLikeStatusHandler };
