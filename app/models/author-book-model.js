module.exports = (sequelize, type) => {
  const authorBook = sequelize.define('authorBook', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, { timestamps: false });
  
  return authorBook;
}