const regionService = require("../services/region");

const getAll = async (req, res) => {
  try {
    const regions = await regionService.getAll();
    res.json(regions);
  } catch (error) {
    console.error("Error fetching regions:", error);
    res.status(500).json({ error: "Failed to fetch regions" });
  }
};
module.exports = { getAll };
