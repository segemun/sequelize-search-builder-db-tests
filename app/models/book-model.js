module.exports = (sequelize, type) => {
  const book = sequelize.define('book', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: type.STRING,
      allowNull: false
    },
    publicationDate: {
      type: type.INTEGER,
      allowNull: false
    },
  }, { timestamps: false });
  
  book.associate = function(models) {
    book.belongsToMany(models.author, {
      through: models.authorBook
    });
  }
  
  return book;
}