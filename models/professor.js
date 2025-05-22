const db = require('../config/db');

module.exports = {
  async findAll() {
    const result = await db.query('SELECT * FROM professor ORDER BY nome ASC');
    return result.rows;
  },

  async create(nome, email) {
    const result = await db.query(
      'INSERT INTO professor (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    return result.rows[0];
  },

  async update(id, nome, email) {
    const result = await db.query(
      'UPDATE professor SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
      [nome, email, id]
    );
    return result.rows[0];
  },

  async delete(id) {
    await db.query('DELETE FROM professor WHERE id = $1', [id]);
  }
};