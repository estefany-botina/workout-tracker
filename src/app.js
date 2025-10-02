const express = require("express");
const app = express();
const { port } = require("./config/env");

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Aquí se monta todo el API
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
