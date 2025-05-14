const Curso = require('../models/curso');

exports.create = async (req, res) => {
  const { nome } = req.body;
  await Curso.create(nome);
  res.redirect('/alunos');
};

// Controller que recebe os dados do formulário e chama o model para atualizar o curso
exports.update = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  await Curso.update(id, nome);
  res.redirect('/alunos');
};

// Controller que chama o model para deletar o curso e redireciona
exports.delete = async (req, res) => {
  const { id } = req.params;
  await Curso.delete(id);
  res.redirect('/alunos');
};