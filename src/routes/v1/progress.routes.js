const express = require("express");
const router = express.Router();
const { getProgress, getProgressById } = require("../../controllers/progress.controller");

router.get("/", getProgress);
router.get("/:id", getProgressById);

module.exports = router;
