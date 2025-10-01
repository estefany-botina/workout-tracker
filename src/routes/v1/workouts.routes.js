const express = require("express");
const router = express.Router();
const { getWorkouts, getWorkoutById } = require("../../controllers/workouts.controller");

// GET /api/v1/workouts
router.get("/", getWorkouts);

// GET /api/v1/workouts/:id
router.get("/:id", getWorkoutById);

module.exports = router;
