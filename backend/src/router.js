const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "../public/uploads/" });

const router = express.Router();

const { validateUser } = require("./services/validators");
const { getUserByEmailMiddleware } = require("./controllers/authControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
} = require("./services/auth");

const brandControllers = require("./controllers/brandControllers");
const categoriesControllers = require("./controllers/categoriesControllers");
const colourControllers = require("./controllers/colourControllers");
const modelControllers = require("./controllers/modelControllers");
const networkControllers = require("./controllers/networkControllers");
const priceControllers = require("./controllers/priceControllers");
const ramControllers = require("./controllers/ramControllers");
const screenControllers = require("./controllers/screenControllers");
const stateControllers = require("./controllers/stateControllers");
const storageControllers = require("./controllers/storageControllers");

router.get("/api/brand", brandControllers.browse);
router.post("/api/brand", upload.single("brand"), brandControllers.importTable);
router.get("/api/categories", categoriesControllers.browse);
router.post(
  "/api/categories",
  upload.single("categories"),
  categoriesControllers.importTable
);
router.get("/api/colour", colourControllers.browse);
router.post(
  "/api/colour",
  upload.single("colour"),
  colourControllers.importTable
);
router.get("/api/model", modelControllers.browse);
router.post("/api/model", upload.single("model"), modelControllers.importTable);
router.get("/api/network", networkControllers.browse);
router.post(
  "/api/network",
  upload.single("network"),
  networkControllers.importTable
);
router.get("/api/price_index", priceControllers.browse);
router.post(
  "/api/price_index",
  upload.single("price"),
  priceControllers.importTable
);
router.get("/api/ram", ramControllers.browse);
router.post("/api/ram", upload.single("ram"), ramControllers.importTable);
router.get("/api/screen", screenControllers.browse);
router.post(
  "/api/screen",
  upload.single("screen"),
  screenControllers.importTable
);
router.get("/api/state", stateControllers.browse);
router.post("/api/state", upload.single("state"), stateControllers.importTable);
router.get("/api/storage", storageControllers.browse);
router.post(
  "/api/storage",
  upload.single("storage"),
  storageControllers.importTable
);

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
