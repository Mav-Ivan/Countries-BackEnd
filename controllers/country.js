const countryService = require("../services/country");

const getAll = async (req, res) => {
  const { page = 1, limit = 12, search = "", region = "" } = req.query;

  try {
    const result = await countryService.getAll(
      Number(page),
      Number(limit),
      search,
      region
    );
    res.json(result);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: "Failed to fetch countries" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const country = await countryService.getById(id);

    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }

    res.json(country);
  } catch (error) {
    console.error("Error fetching country:", error);
    res.status(500).json({ error: "Failed to fetch country" });
  }
};

module.exports = {
  getAll,
  getById,
};
