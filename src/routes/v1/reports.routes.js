const express = require("express");
const router = express.Router();
const { getReports, getReportById } = require("../../controllers/reports.controller");

router.get("/", getReports);
router.get("/:id", getReportById);

module.exports = router;
