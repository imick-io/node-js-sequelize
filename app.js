const express = require("express");

const app = express();

// middleware parse body to json
app.use(express.json());

// Listen
app.listen(3000);
