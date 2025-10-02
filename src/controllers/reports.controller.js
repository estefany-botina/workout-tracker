const getReports = (req, res) => {
  res.send("getReports");
};

const getReportById = (req, res) => {
  res.send(`getReportById with id: ${req.params.id}`);
};

module.exports = {
  getReports,
  getReportById,
};