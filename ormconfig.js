const connection = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities:
    process.env.NODE_ENV === 'production'
      ? ['./dist/database/entities/*.js']
      : ['./src/database/entities/*.ts'],
  migrations:
    process.env.NODE_ENV === 'development'
      ? ['./dist/database/migrations/*.js']
      : ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir:
      process.env.NODE_ENV === 'development'
        ? './dist/database/migrations'
        : './src/database/migrations',
  },
  synchronize: false,
  logging: process.env.NODE_ENV == 'development' ? true : false,
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
