const getPlans = (req, res) => {
  res.send("getPlans");
};

const getPlanById = (req, res) => {
  res.send(`getPlanById with id: ${req.params.id}`);
};

const createPlan = (req, res) => {
  res.send("createPlan");
};

const updatePlan = (req, res) => {
  res.send(`updatePlan with id: ${req.params.id}`);
};

const deletePlan = (req, res) => {
  res.send(`deletePlan with id: ${req.params.id}`);
};

module.exports = {
  getPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan,
};