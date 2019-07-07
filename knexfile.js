require('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE ,
      password: process.env.PGPASSWORD,
      port: process.env.PORT,
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE ,
      password: process.env.PGPASSWORD,
      port: process.env.PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE ,
      password: process.env.PGPASSWORD,
      port: process.env.PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
