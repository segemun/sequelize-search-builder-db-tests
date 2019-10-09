require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        "define": {
            "freezeTableName": true,
            "charset": "utf8",
            "dialectOptions": {
                "collate": "utf8_general_ci"
            }
        },
        "migrationStorageTableName": "sequelize_meta",
        "logging": false
    }
}
