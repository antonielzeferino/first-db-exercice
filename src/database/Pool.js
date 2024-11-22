const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://antoniel:zeferino@localhost:5432/db_exercicio",
});

async function query(queryString, params, callback) {
  return pool.query(queryString, params, callback);
}

async function getClient() {
  return pool.connect()
}

module.exports = { query, getClient };