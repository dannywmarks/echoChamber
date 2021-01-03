// const express = require('express')
const mongoose = require("mongoose");
const Echo = require("../models/echoLayout");
const User = require("../models/userLayout");
const Chamber = require("../models/chamberLayout");



//get Echo
const getEchos = async (req, res) => {
  try {
    const echos = await Echo.find();
    res.status(200).json(echos);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

//get Echo
const getEchosId = async (req, res) => {
  try {
    const { id } = req.params
    const echos = await Echo.find({chamber_id: id});
    res.status(200).json(echos);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

// create Echo
const createEcho = async (req, res) => {
  
  const user = await User.findById(req.user.id).select("-password");
  // const chamber = await Chamber.findById(id)

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
  getEchos,
  createEcho,
  updateEcho,
  deleteEcho,
  getEchosId
};