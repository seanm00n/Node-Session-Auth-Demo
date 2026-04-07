const mysql = require("mysql2");
//require('dotenv').config(); // .env 파일을 읽어옵니다.

const db = mysql.createPool({ // connection보다 pool이 더 안정적입니다.
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

module.exports = db; // 다른 파일에서 쓸 수 있게 내보내기