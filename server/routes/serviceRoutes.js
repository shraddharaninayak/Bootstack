const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getServiceBySlug,
  createService,
} = require("../controllers/serviceController");

router.get("/", getAllServices);
router.get("/:slug", getServiceBySlug);
router.post("/", createService);

module.exports = router;