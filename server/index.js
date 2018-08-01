require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");
const massive = require("massive");
const PORT = process.env.port || 3001;

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  return app.set("db", dbInstance);
});

app.get("/api/test", (req, res) => {
  console.log("testing this apiiii");
  res.status(200).json("tessssstttting");
});

app.listen(PORT, () => console.log(`hey, listening on port ${PORT}`));
