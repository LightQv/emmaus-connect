const express = require("express");

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
router.post("/brand", brandControllers.add);
router.get("/categories", categoriesControllers.browse);
router.get("/colour", colourControllers.browse);
router.get("/model", modelControllers.browse);
router.get("/network", networkControllers.browse);
router.get("/price", priceControllers.browse);
router.get("/ram", ramControllers.browse);
router.get("/screen", screenControllers.browse);
router.get("/state", stateControllers.browse);
router.get("/storage", storageControllers.browse);

module.exports = router;
