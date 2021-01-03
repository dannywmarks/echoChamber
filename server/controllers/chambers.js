// const express = require('express')
const mongoose = require("mongoose");

const User = require("../models/userLayout");
const Echo = require("../models/echoLayout");
const ChamberLayout = require("../models/chamberLayout");

/** Get Chambers */
const getChambers = async (req, res) => {
  try {
    const chamberLayouts = await ChamberLayout.find();
    res.status(200).json(chamberLayouts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/** Get Chamber */
const getChamber = async (req, res) => {
  try {
    const {id} = req.params
    const chamberLayouts = await ChamberLayout.find({_id: id});
    res.status(200).json(chamberLayouts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/** Create a Chamber */
const createChamber = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  const chamber = {
    creator: user.name,
    title: req.body.title,
    channel: req.body.channel,
    selectedFile: req.body.selectedFile,
    notes: req.body.notes,
    tags: req.body.tags,
    user: req.user.id,
  };
  const newChamber = new ChamberLayout(chamber);
  try {
    await newChamber.save();
    res.status(201).json(newChamber);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/** Updated Chamber */
const updateChamber = async (req, res) => {
  // find what needs to be updated
  const { id } = req.params;
  // info to update
  const { title, notes, creator, selectedFile, tags } = req.body;

  // need to check if a valid mongoose object
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Chamber with that id");
  const updatedChamber = { creator, title, notes, tags, selectedFile, _id: id };
  await ChamberLayout.findByIdAndUpdate(id, updatedChamber, { new: true });

  res.json(updatedChamber);
};

const deleteChamber = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Chamber with that id");
  await ChamberLayout.findByIdAndRemove(id);

  res.json({ message: "Chamber Deleted" });
};

const likeChamber = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Chamber with that id");

  const chamber = await ChamberLayout.findById(id);
  const updatedChamber = await ChamberLayout.findByIdAndUpdate(
    id,
    { likeCount: chamber.likeCount + 1 },
    { new: true }
  );

  res.json(updatedChamber);
};

const createEcho = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  // const chamber = await Chamber.findById(id)

  const { id } = req.params;
  console.log( id )
  const echo = {
    title: req.body.title,
    author: req.body.author,
    selectedFile: req.body.selectedFile,
    notes: req.body.notes,
    videoLink: req.body.videoLink,
    bookLink: req.body.bookLink,
    webLink: req.body.blogLink,
    user: req.user.id,
  };

  echo.chamber_id = id;
  console.log(echo)
  const newEcho = new Echo(echo);
  try {
    await newEcho.save();
    res.status(201).json(newEcho);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Update Echo
const updateEcho = async (req, res) => {
  // find what needs to be updated
  const { id } = req.params;
  // info to update
  const { title, author, selectedFile, notes, videoLink, bookLink, webLink  } = req.body;

  // need to check if a valid mongoose object
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Echo with that id");
  const updatedEcho = { title, author, notes, videoLink, bookLink, webLink, selectedFile, _id: id };
  await Echo.findByIdAndUpdate(id, updatedEcho, { new: true });

  res.json(updatedEcho);
};

// Delete Echo
const deleteEcho = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Chamber with that id");

  await Echo.findByIdAndRemove(id);

  res.json({ message: "Echo Deleted" });
};

module.exports = {
  getChamber,
  getChambers,
  createChamber,
  updateChamber,
  deleteChamber,
  likeChamber,
  createEcho,
  updateEcho,
  deleteEcho
};
