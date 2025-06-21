require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DEFAULTPORT,
  database: process.env.DATABASE,
  ssl: {
    rejectUnauthorized: false, // Render requires this
  },
});
module.exports = pool;
