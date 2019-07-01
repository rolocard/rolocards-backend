require('dotenv').config();
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE ,
  password: process.env.PGPASSWORD,
  port: process.env.PORT,
})

pool.query('SELECT myname FROM test_table', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE ,
  password: process.env.PGPASSWORD,
  port: process.env.PORT,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
