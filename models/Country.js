const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true, trim: true },
    topLevelDomain: [{ type: String }],
    alpha2Code: { type: String, required: true, unique: true },
    alpha3Code: { type: String, required: true, unique: true },
    callingCodes: [{ type: String }],
    capital: { type: String },
    altSpellings: [{ type: String }],
    subregion: { type: String },
    region: { type: String },
    population: { type: Number },
    latlng: [{ type: Number }],
    demonym: { type: String },
    area: { type: Number },
    timezones: [{ type: String }],
    borders: [{ type: String }],
    nativeName: { type: String },
    numericCode: { type: String },
    flags: {
      svg: { type: String },
      png: { type: String },
    },
    currencies: [
      {
        code: String,
        name: String,
        symbol: String,
      },
    ],
    languages: [
      {
        iso639_1: String,
        iso639_2: String,
        name: String,
        nativeName: String,
      },
    ],
    translations: {
      br: String,
      pt: String,
      nl: String,
      hr: String,
      fa: String,
      de: String,
      es: String,
      fr: String,
      ja: String,
      it: String,
      hu: String,
    },
    flag: { type: String },
    regionalBlocs: [
      {
        acronym: String,
        name: String,
      },
    ],
    cioc: { type: String },
    independent: { type: Boolean },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Country", countrySchema);
