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

const itemControllers = require("./controllers/itemControllers");
const brandControllers = require("./controllers/brandControllers");
const colourControllers = require("./controllers/colourControllers");
const modelControllers = require("./controllers/modelControllers");
const networkControllers = require("./controllers/networkControllers");
const ramControllers = require("./controllers/ramControllers");
const screenControllers = require("./controllers/screenControllers");
const stateControllers = require("./controllers/stateControllers");
const storageControllers = require("./controllers/storageControllers");

// Public Routes (Auth)
router.post("/api/login", getUserByEmailMiddleware, verifyPassword);
router.get("/api/logout", verifyToken, logout);

// Private Routes
const userControllers = require("./controllers/userControllers");

router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.put("/api/users/:id", userControllers.edit);
router.post("/api/users", validateUser, hashPassword, userControllers.add);
router.delete("/api/users/:id", userControllers.destroy);

module.exports = router;
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/api/brand", brandControllers.browse);
router.get("/api/model", modelControllers.browse);
router.get("/api/network", networkControllers.browse);
router.get("/api/ram", ramControllers.browse);
router.get("/api/screen", screenControllers.browse);
router.get("/api/state", stateControllers.browse);
router.get("/api/storage", storageControllers.browse);
router.get("/api/colour", colourControllers.browse);

module.exports = router;
