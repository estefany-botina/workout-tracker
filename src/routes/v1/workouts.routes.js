const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  patchWorkout,
  deleteWorkout
} = require("../../controllers/workouts.controller");

// GET /api/v1/workouts
router.get("/", getWorkouts);

// GET /api/v1/workouts/:id
router.get("/:id", getWorkoutById);

// POST /api/v1/workouts
router.post("/", createWorkout);

// PUT /api/v1/workouts/:id
router.put("/:id", updateWorkout);

// PATCH /api/v1/workouts/:id
router.patch("/:id", patchWorkout);

// DELETE /api/v1/workouts/:id
router.delete("/:id", deleteWorkout);

module.exports = router;
