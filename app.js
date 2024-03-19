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

const Post = require("./model/post");
const User = require("./model/user");
Post.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Post);

sequelize
  .sync({ force: true })
  .then((result) => {
    // Listen
    app.listen(3000);
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
