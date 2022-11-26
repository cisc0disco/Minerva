export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "ssps-db"),
      user: env("DATABASE_USERNAME", "cisc0"),
      password: env("DATABASE_PASSWORD", "0897secretdb0897"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
