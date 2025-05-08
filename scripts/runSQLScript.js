const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const sqlPath = path.join(__dirname, 'init.sql');
const sql = fs.readFileSync(sqlPath, 'utf-8');

pool.query(sql)
  .then(() => {
    console.log('✅ Script SQL executado com sucesso!');
    pool.end();
  })
  .catch((err) => {
    console.error('❌ Erro ao executar o script SQL:', err);
    pool.end();
  });
