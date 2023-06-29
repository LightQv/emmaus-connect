const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "../public/uploads/" });

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
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

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/brand", brandControllers.browse);
router.post("/brand", upload.single("brand"), brandControllers.importTable);
router.get("/categories", categoriesControllers.browse);
router.post(
  "/categories",
  upload.single("categories"),
  categoriesControllers.importTable
);
router.get("/colour", colourControllers.browse);
router.post("/colour", upload.single("colour"), colourControllers.importTable);
router.get("/model", modelControllers.browse);
router.post("/model", upload.single("model"), modelControllers.importTable);
router.get("/network", networkControllers.browse);
router.post(
  "/network",
  upload.single("network"),
  networkControllers.importTable
);
router.get("/price", priceControllers.browse);
router.post("/price", upload.single("price"), priceControllers.importTable);
router.get("/ram", ramControllers.browse);
router.post("/ram", upload.single("ram"), ramControllers.importTable);
router.get("/screen", screenControllers.browse);
router.post("/screen", upload.single("screen"), screenControllers.importTable);
router.get("/state", stateControllers.browse);
router.post("/state", upload.single("state"), stateControllers.importTable);
router.get("/storage", storageControllers.browse);
router.post(
  "/storage",
  upload.single("storage"),
  storageControllers.importTable
);

module.exports = router;
