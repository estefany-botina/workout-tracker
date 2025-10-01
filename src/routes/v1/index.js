const express = require("express");
const router = express.Router();

// Importar rutas de usuarios
const usersRoutes = require("./users.routes");

// Montar rutas
router.use("/users", usersRoutes);

module.exports = router;
