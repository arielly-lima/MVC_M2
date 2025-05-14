const db = require('../config/db');

module.exports = {
  // Listar todos os professores
  async findAll() {
    const result = await db.query('SELECT * FROM professor ORDER BY nome ASC');
    return result.rows;
  },

  // Criar um novo professor
  async create(nome, email) {
    const result = await db.query(
      'INSERT INTO professor (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    return result.rows[0];
  },

  // Atualizar um professor existente
  async update(id, nome, email) {
    const result = await db.query(
      'UPDATE professor SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
      [nome, email, id]
    );
    return result.rows[0];
  },

  // Deletar um professor
  async delete(id) {
    await db.query('DELETE FROM professor WHERE id = $1', [id]);
  }
};