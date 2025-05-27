const Country = require("../models/Country");

const getAll = async (page = 1, limit = 12, search = "", region = "") => {
  const skip = (page - 1) * limit;
  const filter = {};

  if (search) {
    filter.name = { $regex: new RegExp(search, "i") };
  }

  if (region) {
    filter.region = region;
  }

  const [countries, total] = await Promise.all([
    Country.find(filter).skip(skip).limit(limit),
    Country.countDocuments(filter),
  ]);

  return {
    data: countries,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getById = async (id) => {
  return await Country.findById(id);
};

module.exports = {
  getAll,
  getById,
};
