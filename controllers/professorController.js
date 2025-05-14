const Professor = require('../models/professor');

// Listar todos os professores
exports.index = async (req, res) => {
  const professores = await Professor.findAll();
  res.render('professores/index', { professores });
};

// Criar novo professor
exports.create = async (req, res) => {
  const { nome, email } = req.body;
  await Professor.create(nome, email);
  res.redirect('/professores');
};

// Atualizar dados do professor
exports.update = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  await Professor.update(id, nome, email);
  res.redirect('/professores');
};

// Deletar professor
exports.delete = async (req, res) => {
  const { id } = req.params;
  await Professor.delete(id);
  res.redirect('/professores');
};