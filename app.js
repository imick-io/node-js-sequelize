const express = require("express");
const path = require("path");

const sequelize = require("./utils/database");

const app = express();

const errorController = require("./controllers/error.controller");
const userRoutes = require("./routes/user");

// middleware parse body to json
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/users", userRoutes);
app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // Listen
    app.listen(3000);
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
