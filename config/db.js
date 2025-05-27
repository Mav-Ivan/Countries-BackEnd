const mongoose = require("mongoose");
const Country = require("../models/Country");
const Region = require("../models/Region");
const countriesData = require("./data/countries");
const regionsData = require("./data/regions");

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/countriesDB";

async function initializeMongoDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");

    const regions = await Region.countDocuments();
    const countries = await Country.countDocuments();

    if (regions === 0) {
      await Region.insertMany(regionsData);
      console.log("Regions data initialized");
    }

    if (countries === 0) {
      await Country.insertMany(countriesData);
      console.log("Countries data initialized");
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

module.exports = initializeMongoDB;
