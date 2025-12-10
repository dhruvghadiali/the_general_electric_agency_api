require("colors");
require("module-alias/register");

const path = require("path");
const express = require("express");

var cors = require("cors");

const setupSwagger = require("@Config/swagger");
const errorHandler = require("@Middleware/error");
const publicRouter = require("@Routes/publicRouter");
const employeeRouter = require("@Routes/employeeRouter");
const wareHouseAdminRouter = require("@Routes/wareHouseAdminRouter");
const superAdminRouter = require("@Routes/superAdminRouter");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

setupSwagger(app);

app.use("/", publicRouter);
app.use("/employee", employeeRouter);
app.use("/ware-house-admin/", wareHouseAdminRouter);
app.use("/super-admin/", superAdminRouter);
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "errorPage", "invalidEndpoint.html"));
});
app.use(errorHandler);

module.exports = app;
