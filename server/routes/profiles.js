const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const {
  getProfile,
  createProfile,
  getAllProfiles,
  getByUserProfile,
  deleteProfile,
} = require("../controllers/profile");
const { check } = require("express-validator");

// get single profile
router.get("/me", auth, getProfile);
//create a profile
router.post(
  "/",
  [auth, [check("bio", "Short bio is required").not().isEmpty()]],
  createProfile
);
// get all profiles, public
router.get("/", getAllProfiles);
router.get("/user/:user_id", getByUserProfile);
router.delete("/", auth, deleteProfile);

module.exports = router;
