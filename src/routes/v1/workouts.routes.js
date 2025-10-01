const express = require("express");
const router = express.Router();
const { getWorkouts, getWorkoutById, createWorkout } = require("../../controllers/workouts.controller");

// GET /api/v1/workouts
router.get("/", getWorkouts);

// GET /api/v1/workouts/:id
router.get("/:id", getWorkoutById);

// POST /api/v1/workouts
router.post("/", createWorkout);

module.exports = router;
