const express = require("express");
const path = require("path");

const sequelize = require("./utils/database");

const app = express();

const Post = require("./model/post");
const User = require("./model/user");

const errorController = require("./controllers/error.controller");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

// middleware parse body to json
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// middleware
// Grab the user from the database and store it in the request object
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use(errorController.get404);

Post.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Post);

sequelize
  //   .sync({ force: true })
  .sync()
  // Create a dummy user
  .then(() => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "John Doe", email: "john.doe@gmail.com" });
    }
    return user; // return a promise
  })
  .then((result) => {
    // Listen
    app.listen(3000);
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
