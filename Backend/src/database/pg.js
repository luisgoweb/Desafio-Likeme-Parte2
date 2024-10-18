import pg from 'pg'
import config from '../../config.js'

const pool = new pg.Pool({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
});

export default pool