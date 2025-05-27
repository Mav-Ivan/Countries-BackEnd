const express = require("express");
const router = express.Router();
const cache = require("../middleware/cache");
const countryController = require("../controllers/country");

router.get(
  "/",
  cache(process.env.CACHE_DURATION || 3600),
  countryController.getAll
);
router.get(
  "/:id",
  cache(process.env.CACHE_DURATION || 3600),
  countryController.getById
);

module.exports = router;
