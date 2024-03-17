const User = require("../model/user");

exports.all = (req, res, next) => {
  res.status(200).json({ message: "All users" });
};

exports.create = (req, res, next) => {
  // User.
};
