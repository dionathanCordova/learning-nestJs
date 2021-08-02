const connection = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.PG_DB_PORT),
  entities:
    process.env.NODE_ENV === 'production'
      ? ['./dist/models/*.js']
      : [process.env.PG_DB_ENTITIES_DIR],
  entitiesDir: process.env.DB_ENTITIES_DIR,
  migrations:
    process.env.NODE_ENV === 'production'
      ? ['./dist/database/migrations/*.js']
      : [process.env.PG_DB_MIGRATIONS],
  cli: {
    migrationsDir:
      process.env.NODE_ENV === 'production'
        ? './dist/database/migrations'
        : process.env.PG_DB_MIGRATIONS_DIR,
  },
  synchronize: false,
  logging: process.env.NODE_ENV == 'development' ? true : false,
  migrationsRun: true,
  options: {
    enableArithAbort: true,
    useUTC: false,
  },
};

connection.database =
  process.env.NODE_ENV === 'test'
    ? './src/database/database.test.sqlite'
    : process.env.DB_DATABASE;

module.exports = connection;
