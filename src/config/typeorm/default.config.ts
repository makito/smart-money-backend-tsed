import dotenv from "dotenv";

dotenv.config();

export default {
  name: "default",
  type: "mariadb",
  host: process.env.DATABASE_HOST || "localhost",
  port: 3306,
  username: process.env.DATABASE_USER_NAME || "test",
  password: process.env.DATABASE_PASSWORD || "test",
  database: process.env.DATABASE_NAME || "test",
  synchronize: true,
  logging: false,
  entities: [
    "${rootDir}/entity/**/*.{js,ts}"
  ],
  migrations: [
    "${rootDir}/migration/**/*.{js,ts}"
  ],
  subscribers: [
    "${rootDir}/subscriber/**/*.{js,ts}"
  ],
  cli: {
    "entitiesDir": "${rootDir}/entity",
    "migrationsDir": "${rootDir}/migration",
    "subscribersDir": "${rootDir}/subscriber"
  }
};
