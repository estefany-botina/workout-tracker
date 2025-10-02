const express = require("express");
const router = express.Router();


const reportsRoutes = require("./reports.routes");
const schedulesRoutes = require("./schedules.routes");
const plansRoutes = require("./plans.routes");
const exercisesRoutes = require("./exercises.routes");
const usersRoutes = require("./users.routes");
const workoutsRoutes = require("./workouts.routes");
const progressRoutes = require("./progress.routes");


router.use("/reports", reportsRoutes);
router.use("/schedules", schedulesRoutes);
router.use("/plans", plansRoutes);
router.use("/exercises", exercisesRoutes);
router.use("/users", usersRoutes);
router.use("/workouts", workoutsRoutes);
router.use("/progress", progressRoutes);

module.exports = router;