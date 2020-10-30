const mongoose = require("mongoose");

const RecordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  label: {
    type: String,
  },
  format: {
    type: String,
    default: "Vinyl",
  },
  country: {
    type: String,
  },
  releaseDate: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    min: [0, "No negative scores"],
    max: [10, "The maximum rating is 10"],
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("record", RecordSchema);
