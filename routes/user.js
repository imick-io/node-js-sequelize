const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.all);
router.get("/:id", userController.findById);
router.post("/", userController.create);

module.exports = router;
