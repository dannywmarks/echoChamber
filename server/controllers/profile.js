const mongoose = require("mongoose");
const Profile = require("../models/profileLayout");
const User = require("../models/userLayout");
const { validationResult } = require("express-validator");

/** Get Profile */
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "email"]);
    //Check for user profile
    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no profile for this user " });
    }

    res.status(200).json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

/** Create Profile */
const createProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    selectedFile,
    rank,
    bio,
    interests,
    school,
    // spread rest of fields
  } = req.body;

  // build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (selectedFile) profileFields.selectedFile = selectedFile;
  if (rank) profileFields.rank = rank;
  if (bio) profileFields.bio = bio;
  if (school) profileFields.school = school;
  // create an array for interests and trim any space
  if (interests) {
    profileFields.interests = interests
      .split(",")
      .map((interest) => interest.trim());
  }

  try {
    // Using upsert option (creates new doc if no match is found):
    console.log(profileFields.interests);
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getAllProfiles = async (req, res) => {
  try {

    const profiles = await Profile.find().populate("user", ["name", "email"]);
    
    return res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// get profile by user id
const getByUserProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "email"]);
    if (!profile) return res.status(400).json({ msg: "Profile not found" });
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
};

const deleteProfile = async (req, res) => {
  try {
    // Remove User post
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove User
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User Deleted" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getProfile,
  createProfile,
  getAllProfiles,
  getByUserProfile,
  deleteProfile,
};
