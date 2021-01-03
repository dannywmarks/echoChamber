const express = require("express");
const {
  getChamber,
  getChambers,
  createChamber,
  updateChamber,
  deleteChamber,
  likeChamber,
  createEcho,
  updateEcho,
  deleteEcho
} = require("../controllers/chambers");
const auth = require("../middleware/auth");
const router = new express.Router();

// get all chambers
router.get("/", getChambers);
// get chambers by id
router.get("/:id", getChamber);
// create a chamber
router.post("/", auth, createChamber);

// update chamber
router.patch("/:id", updateChamber);
// adding echos
router.delete("/:id", deleteChamber);
// like a chamber
router.patch("/:id/likeChamber", likeChamber);

// create an echo for chamber
router.post('/:id/echo', auth, createEcho)
// update an echo for chamber
router.patch("/:id/echo/:id", auth, updateEcho);
// adding echo
router.delete("/:id/echo/:id", auth, deleteEcho);

module.exports = router;
