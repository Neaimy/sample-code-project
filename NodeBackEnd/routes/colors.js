const express = require("express");
const router = express.Router();
let colors = require("../dummyColorDB");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: colors
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured while fetching colors",
      err
    });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let color = colors.find(color => color._id === id);
    res.status(200).json({
      data: color
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured while fetching color",
      err
    });
  }
});

module.exports = router;
