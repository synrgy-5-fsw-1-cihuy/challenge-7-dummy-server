const cors = require("cors");
const express = require("express");

const { populateData } = require("./utils/binar");

const app = express();

app.use(cors());

const data = require("./data/cars.json");

app.get("/api/cars", (req, res) => {
  const cars = populateData(data);
  res.json({
    code: 200,
    message: "success",
    data: cars,
  });
});

app.use((req, res) => {
  res.json({
    code: 200,
    message: "Please visit /api/cars",
    data: null,
  });
});

module.exports = app;
