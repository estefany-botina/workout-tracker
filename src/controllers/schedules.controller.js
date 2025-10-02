const getSchedules = (req, res) => {
  res.send("getSchedules");
};

const getScheduleById = (req, res) => {
  res.send(`getScheduleById with id: ${req.params.id}`);
};

module.exports = {
  getSchedules,
  getScheduleById,
};