const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");
const workoutsRoutes = require("./workouts.routes");
const plansRoutes = require("./plans.routes");
const exercisesRoutes = require("./exercises.routes");
const schedulesRoutes = require("./schedules.routes");
const reportsRoutes = require("./reports.routes");
const progressRoutes = require("./progress.routes");

router.use("/users", usersRoutes);
router.use("/workouts", workoutsRoutes);
router.use("/plans", plansRoutes);
router.use("/exercises", exercisesRoutes);
router.use("/schedules", schedulesRoutes);
router.use("/reports", reportsRoutes);
router.use("/progress", progressRoutes);

module.exports = router;
