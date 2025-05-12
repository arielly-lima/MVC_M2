// Aqui temos os métodos para manipular os dados do aluno no banco de dados - CRUD
// Onde o controller se comunica com o model (através de funções) para manipular os dados

const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO aluno (nome, email, curso_id) VALUES ($1, $2, $3)';
    const values = [data.nome, data.email, data.curso_id || null];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM aluno ORDER BY id ASC');
    return result.rows;
  },

  async update(id, data) {
    const query = 'UPDATE aluno SET nome = $1, email = $2 WHERE id = $3';
    const values = [data.nome, data.email, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM aluno WHERE id = $1';
    return db.query(query, [id]);
  },

  async findByCurso(curso_id) {
    const query = `
      SELECT aluno.id, aluno.nome, aluno.email
      FROM aluno
      WHERE curso_id = $1
      ORDER BY nome ASC
    `;
    const result = await db.query(query, [curso_id]);
    return result.rows;
  },

  async findAllComCurso() {
    const query = `
      SELECT aluno.id, aluno.nome, aluno.email, curso.nome AS curso
      FROM aluno
      LEFT JOIN curso ON aluno.curso_id = curso.id
      ORDER BY aluno.id ASC
    `;
    const result = await db.query(query);
    return result.rows;
  }
};

///=============================///
/* Posso criar mais ações aqui, deletar o cusro, por exemplo */