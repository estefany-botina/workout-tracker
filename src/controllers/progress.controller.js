let progress = [
  { id: "1", userId: "1", weight: 70, notes: "Avance notable en resistencia" }
];

const getProgress = (req, res) => {
  res.status(200).json(progress);
};

const getProgressById = (req, res) => {
  const { id } = req.params;
  const prog = progress.find(p => p.id === id);

  if (!prog) return res.status(404).json({ error: "Progreso no encontrado" });

  res.status(200).json(prog);
};

module.exports = { getProgress, getProgressById };
