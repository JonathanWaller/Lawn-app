const express = require("express");
const { json } = require("body-parser");
const PORT = 3001;

const app = express();

app.use(json());

app.listen(PORT, () => console.log(`hey, listening on port ${PORT}`));
