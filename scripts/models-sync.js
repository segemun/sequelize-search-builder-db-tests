const sequelize = require('../app/models').sequelize;

sequelize.sync({
    force: true
}).then(() => process.exit(0))
  .catch(() => process.exit(1));
