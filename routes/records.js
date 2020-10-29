const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Record = require("../models/Record");

// @route       GET api/records
// @desc        Get all users records
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const records = await Record.find({ user: req.user.id }).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/records
// @desc        Add new record
// @access      Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("artist", "Artist is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      artist,
      genre,
      label,
      format,
      country,
      releaseDate,
      rating,
      notes,
    } = req.body;

    try {
      const newRecord = new Record({
        title,
        artist,
        genre,
        label,
        format,
        country,
        releaseDate,
        rating,
        notes,
        user: req.user.id,
      });

      const record = await newRecord.save();

      res.json(record);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route       PUT api/records/:id
// @desc        Update record
// @access      Private
router.put("/:id", auth, async (req, res) => {
  const {
    title,
    artist,
    genre,
    label,
    format,
    country,
    releaseDate,
    rating,
    notes,
  } = req.body;

  // Build record object
  const recordFields = {};
  if (title) recordFields.title = title;
  if (artist) recordFields.artist = artist;
  if (genre) recordFields.genre = genre;
  if (label) recordFields.label = label;
  if (format) recordFields.format = format;
  if (country) recordFields.country = country;
  if (releaseDate) recordFields.releaseDate = releseDate;
  if (rating) recordFields.rating = rating;
  if (notes) recordFields.notes = notes;

  try {
    let record = await Record.findById(req.params.id);

    if (!record) return res.status(404).json({ msg: "Record not found" });

    // Make sure user owns record
    if (record.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    record = await Record.findByIdAndUpdate(
      req.params.id,
      { $set: recordFields },
      { new: true }
    );
    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       DELETE api/records/:id
// @desc        DELETE record
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let record = await Record.findById(req.params.id);

    if (!record) return res.status(404).json({ msg: "Record not found" });

    // Make sure user owns record
    if (record.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Record.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
