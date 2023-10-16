const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const router = express.Router();

//ROUTES
router.post("/create-inventory", authMiddleware, createInventoryController);

router.get("/get-inventory", authMiddleware, getInventoryController);

//GET BLOOD RECORD OF 3
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//donar records
router.get("/get-donars", authMiddleware, getDonarsController);

//get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get inventory records
router.get("/get-orgnaisation", authMiddleware, getOrganisationController);

//get inventory routes for hospitals
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

//hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

module.exports = router;
