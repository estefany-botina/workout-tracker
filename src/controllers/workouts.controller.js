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
  const { date, search } = req.query;
  let result = workouts;

  // Filtrar por fecha exacta
  if (date) {
    result = result.filter(w => w.date.startsWith(date));
  }

  // Buscar por título o descripción
  if (search) {
    result = result.filter(
      w =>
        w.title.toLowerCase().includes(search.toLowerCase()) ||
        w.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
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
    id: `${Date.now()}`,
    title,
    description,
    date,
    createdAt: new Date().toISOString()
  };

  workouts.push(newWorkout);

  res.status(201).json(newWorkout);
};

// Actualización completa con PUT
const updateWorkout = (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;

  const index = workouts.findIndex(w => w.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }

  if (!title || !description || !date) {
    return res.status(400).json({ error: "Title, description y date son requeridos" });
  }

  workouts[index] = {
    ...workouts[index],
    title,
    description,
    date
  };

  res.status(200).json(workouts[index]);
};

// Actualización parcial con PATCH
const patchWorkout = (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;

  const index = workouts.findIndex(w => w.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }

  workouts[index] = {
    ...workouts[index],
    title: title || workouts[index].title,
    description: description || workouts[index].description,
    date: date || workouts[index].date
  };

  res.status(200).json(workouts[index]);
};

// Eliminar workout
const deleteWorkout = (req, res) => {
  const { id } = req.params;
  const index = workouts.findIndex(w => w.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }

  const deleted = workouts.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].id });
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  patchWorkout,
  deleteWorkout
};
