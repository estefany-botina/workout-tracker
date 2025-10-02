const express = require("express");
const router = express.Router();
const { getSchedules, getScheduleById } = require("../../controllers/schedules.controller");

router.get("/", getSchedules);
router.get("/:id", getScheduleById);

module.exports = router;
