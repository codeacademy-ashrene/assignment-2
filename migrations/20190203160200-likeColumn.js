module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Books',
    'likeStatus',
    {
      allowNull: true,
      type: Sequelize.STRING,
    },

  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn(
    'Books',
    'likeStatus',
  ),
};
