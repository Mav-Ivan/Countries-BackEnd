const express = require("express");
const router = express.Router();
const cache = require("../middleware/cache");
const regionController = require("../controllers/region");

router.get(
  "/",
  cache(process.env.CACHE_DURATION || 3600),
  regionController.getAll
);

module.exports = router;
