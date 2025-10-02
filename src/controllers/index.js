// Archivo barril para controladores

const reportsController = require("./reports.controller");
const schedulesController = require("./schedules.controller");
const plansController = require("./plans.controller");
const exercisesController = require("./exercises.controller");
const usersController = require("./users.controller");

module.exports = {
  schedulesController,
  reportsController,
  plansController,
  exercisesController,
  usersController
};