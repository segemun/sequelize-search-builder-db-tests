module.exports = (sequelize, type) => {
  const author = sequelize.define('author', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING,
      allowNull: false
    },
    surname: {
      type: type.STRING,
      allowNull: false
    },
  }, { timestamps: false });
  
  author.associate = function(models) {
    author.belongsToMany(models.book, {
      through: models.authorBook
    });
  }
  
  return author;
}