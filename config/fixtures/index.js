const sequelizeFixtures = require('sequelize-fixtures'),
      models            = require('../../app/models');

const files = [
  'author',
  'book'
];

sequelizeFixtures.loadFiles(files.map(file => `./config/fixtures/${file}.js`), models).then(() => {
  console.log('Fixtures loaded successfully');
  process.exit();
});