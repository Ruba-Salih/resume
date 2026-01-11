const { Sequelize } = require("sequelize");
require("dotenv").config();

/**
 * Create a single Sequelize instance
 * This will be reused across the entire app
 */
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,

    // Recommended defaults
    logging: false,          // disable SQL logs
    define: {
      underscored: true,     // user_id instead of userId
      timestamps: true       // created_at, updated_at
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = sequelize;
