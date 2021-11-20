const DATABASE_PASS = process.env.DATABASE_PASS;

module.exports = {
  development: {
    username: "postgres",
    password: DATABASE_PASS,
    database: "projectman",
    host: "localhost",
    dialect: "postgres",
    logging: true,
  },
  production: {
    username: "postgres",
    password: DATABASE_PASS,
    database: "projectman",
    host: "localhost",
    dialect: "postgres",
    logging: true,
  },
};
