import { Sequelize } from "sequelize"
import "dotenv/config"

const DBname = process.env.DB_NAME as string;
const DBuser = process.env.USER_NAME as string;
const DBpass = process.env.PASSWORD as string;
const DBHost = process.env.DB_HOST as string;

const dbcon = new Sequelize(DBname, DBuser, DBpass, {
  host: DBHost,
  dialect: 'mysql'
});

export default dbcon;