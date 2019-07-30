// Update with your config settings.
require("dotenv").config();
const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite3"
    },
  //   pool: {
  //     afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
  //   },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  },

  // staging: {
  //   client: "postgresql",
  //   connection: process.env.STAGING_DB,
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./data/dev.sqlite3"
  //   },
  //   pool: {
  //     afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //     directory: "./data/migrations"
  //   },
  //   seeds: {
  //     directory: "./data/seeds"
  //   },
  //   useNullAsDefault: true
  // }
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/dev.sqlite3'
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './data/migrations',
  //     tableName: 'dbmigrations'
  //   },
  //   seeds: {directory: './data/seeds'}

  // },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
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
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: true,
    // connection: {
    //   database: process.env.DATABASE_URL
    //   // user:     process.env.DB_USER,
    //   // password: process.env.DB_PASSWORD
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: "./data/seeds"
    }
  }

};

