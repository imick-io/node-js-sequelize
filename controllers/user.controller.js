const User = require("../model/user");

exports.all = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error", error: err });
    });
};

exports.findById = (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json({ user: user });
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error", error: err });
    });
};

exports.create = (req, res, next) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
  })
    .then((result) => {
      res.status(201).json({ message: "User created", user: result });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error", error: err });
    });
};
