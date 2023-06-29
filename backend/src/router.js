const express = require("express");

const router = express.Router();

const { validateUser } = require("./services/validators");
const { getUserByEmailMiddleware } = require("./controllers/authControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
} = require("./services/auth");

// Public Routes (Auth)
router.post("/api/login", getUserByEmailMiddleware, verifyPassword);
router.get("/api/logout", verifyToken, logout);

// Private Routes
const userControllers = require("./controllers/userControllers");

router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.put("/api/users/:id", userControllers.edit);
router.put("/api/users/pw/:id", hashPassword, userControllers.editPassword);
router.post("/api/users", validateUser, hashPassword, userControllers.add);
router.delete("/api/users/:id", userControllers.destroy);

module.exports = router;
