let workouts = [
  {
    id: "1",
    title: "Rutina de pierna",
    description: "Entrenamiento de fuerza para piernas",
    date: "2025-10-01T08:00:00Z",
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

// Crear nuevo workout
const createWorkout = (req, res) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ error: "Title, description y date son requeridos" });
  }

  const newWorkout = {
    id: `${Date.now()}`, // ID temporal
    title,
    description,
    date,
    createdAt: new Date().toISOString()
  };

  workouts.push(newWorkout);

  res.status(201).json(newWorkout);
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout
};
