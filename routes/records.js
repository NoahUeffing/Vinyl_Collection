const express = require("express");
const router = express.Router();

// @route       GET api/records
// @desc        Get all users records
// @access      Private
router.get("/", (req, res) => {
  res.send("Get all records");
});

// @route       POST api/records
// @desc        Add new record
// @access      Private
router.post("/", (req, res) => {
  res.send("Add record");
});

// @route       PUT api/records/:id
// @desc        Update record
// @access      Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route       DELETE api/records/:id
// @desc        DELETE record
// @access      Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
