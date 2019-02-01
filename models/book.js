module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
  }, {});
  const addBooks = (author, bookId, name, rating) => Book.create({
    author, bookId, name, rating,
  }).then;

  Book.generate = (author, bookId, name, rating) => {
    // const currentBookId = bookId;
    // Book.getOneBook = id => Book.findOne({
    //   where: {
    //     bookId: id,
    //   },
    // }).then(null, addBooks(author, bookId, name, rating));
    // Book.getOneBook(currentBookId);
    Book.findOrCreate({
      where: {
        author,
        bookId,
        name,
        rating,
      },
    });
  };


  return Book;
};
