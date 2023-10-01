const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//ROUTES
//REGISTER
router.post("/register", registerController);
//LOGIN
router.post("/login", loginController);
//GET CURRENT USER
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
