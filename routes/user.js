const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.all);
router.get("/:id", userController.findById);
router.put("/:id", userController.update);
router.get("/email/:email", userController.findByEmail);
router.post("/", userController.create);
router.delete("/:id", userController.delete);

module.exports = router;
