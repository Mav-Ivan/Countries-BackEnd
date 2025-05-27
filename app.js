require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const corsMiddleware = require("./config/cors");
const initializeMongoDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");

const regionsRouter = require("./routes/regions");
const countriesRouter = require("./routes/countries");

const app = express();

app.use(corsMiddleware);

initializeMongoDB();

app.use(
  process.env.API_DOCS_PATH || "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("Server is running on Vercel!");
});
app.use("/countries", countriesRouter);
app.use("/regions", regionsRouter);

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
});

module.exports = app;
