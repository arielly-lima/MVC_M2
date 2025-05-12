const db = require('../config/db');

module.exports = {
  async findAll() {
    const result = await db.query('SELECT * FROM curso ORDER BY nome ASC');
    return result.rows;
  },

  async create(nome) {
    const query = 'INSERT INTO curso (nome) VALUES ($1) RETURNING *';
    const result = await db.query(query, [nome]);
    return result.rows[0];
  }
};