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
  },

  async update(id, nome) {
    const query = 'UPDATE curso SET nome = $1 WHERE id = $2 RETURNING *';
    const result = await db.query(query, [nome, id]);
    return result.rows[0];
  },

  async delete(id) {
    await db.query('DELETE FROM curso WHERE id = $1', [id]);
  }
};
