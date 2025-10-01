// Estado en memoria (simulación)
let workouts = [
  {
    id: "1",
    title: "Rutina de pierna",
    description: "Entrenamiento de fuerza para piernas",
    date: "2025-10-02T08:00:00Z",
    createdAt: new Date().toISOString()
  }
];

// Obtener todos los workouts
const getWorkouts = (req, res) => {
  res.status(200).json(workouts);
};

// Obtener workout por ID
const getWorkoutById = (req, res) => {
  const { id } = req.params;
  const workout = workouts.find(w => w.id === id);

  if (!workout) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkoutById
};
