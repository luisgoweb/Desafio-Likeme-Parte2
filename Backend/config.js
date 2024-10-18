import { config } from "dotenv";

config();

export default{
    PORT:process.env.PORT,
    host: process.env.HOST_PG,
    port: process.env.PG_PORT_PG,
    database: process.env.DATABASE_PG,
    user: process.env.USER_PG,
    password: process.env.PASSWORD_PG
}