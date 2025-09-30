const express = require("express");
const router = express.Router();
const { getUsers, getUserById } = require("../../controllers/users.controller");

// GET /api/v1/users
router.get("/", getUsers);

// GET /api/v1/users/:id
router.get("/:id", getUserById);

module.exports = router;
