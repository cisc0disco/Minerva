export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "ssps-db"),
      user: env("PGUSER", "cisc0"),
      password: env("PGPASSWORD", "0897secretdb0897"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
