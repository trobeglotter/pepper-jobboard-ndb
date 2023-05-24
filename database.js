
const { Pool } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const connectionString = process.env.DATABASE_URL

// SET UP DATABASE LINK
const pool = new Pool({
    connectionString
});

module.exports = pool;