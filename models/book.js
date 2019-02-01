module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
  }, {});

  Book.generate = (author, bookId, name, rating) => Book.create({
    author, bookId, name, rating,
  }); // POST

  return Book;
};
