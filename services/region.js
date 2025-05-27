const Region = require("../models/Region");

module.exports.getAll = async () => {
  return await Region.find({}).sort({ _id: 1 });
};
