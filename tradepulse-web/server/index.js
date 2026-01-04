/* Minimal backend (index.js) */
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/healthz", (_req, res) => res.json({ ok: true }));

app.post("/api/predict", (_req, res) => {
  res.json({ message: "Replace with real predict logic" });
});

app.listen(PORT, () => console.log("Predictor API listening on http://localhost:" + PORT));
