module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    likeStatus: DataTypes.STRING,
  }, {});

  Book.generate = (author, bookId, name, rating, likeStatus) => {
    Book.findOrCreate({
      where: {
        author,
        bookId,
        name,
        rating,
      },
    }).then((response) => {
      // console.log(response);
      Book.update({
        likeStatus,
      }, {
        where: {
          bookId,
        },
      });
    });
  };


  return Book;
};
