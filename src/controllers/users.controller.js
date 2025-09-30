// Estado en memoria (simulación)
let users = [
  {
    id: "1",
    name: "Carlos Navia",
    email: "carlos@example.com",
    role: "user",
    createdAt: new Date().toISOString()
  }
];

// Obtener todos los usuarios
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// Obtener un usuario por ID
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.status(200).json(user);
};

module.exports = {
  getUsers,
  getUserById
};
