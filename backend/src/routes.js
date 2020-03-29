const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

// Tipos de parametros:
// Query params: request.query
// Route params: request.params
// Body: request.body

const routes = Router();

routes.get("/", (req, res) => {
  res.send("api radarDev");
});

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
