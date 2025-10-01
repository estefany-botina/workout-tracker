let users = [
  {
    id: "1",
    name: "Carlos Navia",
    email: "carlos@example.com",
    role: "user",
    createdAt: new Date().toISOString()
  }
];

// Obtener todos los usuarios con filtros
const getUsers = (req, res) => {
  const { role, search } = req.query; // extraemos filtros de la query
  let result = users;

  // Filtro por rol
  if (role) {
    result = result.filter(u => u.role === role);
  }

  // Búsqueda por nombre (case-insensitive)
  if (search) {
    result = result.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};


// Obtener usuario por ID
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.status(200).json(user);
};

// Crear nuevo usuario
const createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name y email son requeridos" });
  }

  const newUser = {
    id: `${Date.now()}`,
    name,
    email,
    role: role || "user",
    createdAt: new Date().toISOString()
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

// Actualización completa con PUT
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  if (!name || !email) {
    return res.status(400).json({ error: "Name y email son requeridos" });
  }

  users[index] = {
    ...users[index],
    name,
    email,
    role
  };

  res.status(200).json(users[index]);
};

// Actualización parcial con PATCH
const patchUser = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  users[index] = {
    ...users[index],
    name: name || users[index].name,
    email: email || users[index].email,
    role: role || users[index].role
  };

  res.status(200).json(users[index]);
};

// Eliminar usuario con DELETE
const deleteUser = (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const deletedUser = users.splice(index, 1);
  res.status(200).json({ deleted: deletedUser[0].id });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
};
