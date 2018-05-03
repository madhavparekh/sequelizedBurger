require('dotenv').config();

module.exports = {
  development: {
    username: process.env.RDS_USER,
    password: process.env.RDS_PASS,
    database: process.env.RDS_DATABASE,
    host: process.env.RDS_HOST,
    dialect: process.env.RDS_DIALECT,
    port: process.env.RDS_PORT,
  },
  test: {
    username: process.env.RDS_USER,
    password: process.env.RDS_PASS,
    database: process.env.RDS_DATABASE,
    host: process.env.RDS_HOST,
    dialect: process.env.RDS_DIALECT,
    port: process.env.RDS_PORT,
  },
  production: {
    username: process.env.RDS_USER,
    password: process.env.RDS_PASS,
    database: process.env.RDS_DATABASE,
    host: process.env.RDS_HOST,
    dialect: process.env.RDS_DIALECT,
    port: process.env.RDS_PORT,
  },
};
