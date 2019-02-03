const axios = require('axios');
const makeGetRequest = require('../utils/makeGetRequest');

const authorAndRatingHandler = async (request, h) => {
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
  console.log(bookRatings);
  const bookRatingsCollection = await Promise.all(bookRatings);

  // const authorAndRatingData = bookData.forEach(book => ({
  //   Author: bookData['Author'],
  //   id: bookData['id'],
  //   Name: bookData['Name'],
  //   rating: bookRatingsCollection[index]['rating'],
  // }), index);

  // const authorAndRatingData = bookData.forEach(book => ({
  //   Author: bookData.Author,
  //   id: bookData.id,
  //   Name: bookData.Name,
  //   rating: bookRatingsCollection[index].rating,
  // }), index);

  const authorAndRatingData = [];
  for (let index = 0; index < noOfBooks; index += 1) {
    authorAndRatingData[index] = {
      Author: bookData[index].Author,
      id: bookData[index].id,
      Name: bookData[index].Name,
      rating: bookRatingsCollection[index].rating,
    };
  }

  const resultObject = {};

  for (let index = 0; index < noOfBooks; index += 1) {
    const author = authorAndRatingData[index].Author;
    const authorArray = [];
    for (let secondIndex = 0; secondIndex < noOfBooks; secondIndex += 1) {
      if (authorAndRatingData[secondIndex].Author === author) {
        authorArray.push(authorAndRatingData[secondIndex]);
      }
    }
    resultObject[author] = authorArray;
  }

  return resultObject;
};

module.exports = { authorAndRatingHandler };
