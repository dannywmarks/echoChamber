const express = require("express");
const {
  getEchos,
  createEcho,
  updateEcho,
  deleteEcho,
  getEchosId
} = require("../controllers/echos");
const auth = require("../middleware/auth");
const router = new express.Router();

// get all echos
router.get("/", getEchos);
// create a echo
router.get("/:id", getEchosId)
router.post("/", auth, createEcho);
// update echo
router.patch("/:id", auth, updateEcho);
// adding echo
router.delete("/:id", auth, deleteEcho);

module.exports = router;
