const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

const EchoLayout = require('../models/echoLayout')

/** Get Chambers */
const getEchos = async (req, res) => {
  try {
    const echoLayouts =  await EchoLayout.find()
    res.status(200).json(echoLayouts)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
/** Create a Chamber */
const createEcho = async (req, res) => {
  const echo = req.body;
  const newEcho = new EchoLayout(echo)
  try {
    await newEcho.save()
    res.status(201).json(newEcho)
  } catch(err) {
    res.status(409).json({ message: err.message})
  }
}

/** Updated Chamber */
const updateEcho = async (req, res) => {
  
    // find what needs to be updated
    const {id } = req.params;
    // info to update
    const { title, notes , creator, selectedFile, tags } = req.body;
    
    // need to check if a valid mongoose object
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No echo with that id')
    const updatedEcho = { creator, title, notes, tags, selectedFile, _id: id };
    await EchoLayout.findByIdAndUpdate(id, updatedEcho, { new: true })

    res.json(updatedEcho)
}

const deleteEcho = async (req,res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No echo with that id')
  await EchoLayout.findByIdAndRemove(id);

  res.json({ message: "Echo Deleted" })
}


const likeEcho = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No echo with that id')
  
  const echo = await EchoLayout.findById(id)
  const updatedEcho = await EchoLayout.findByIdAndUpdate(id, { likeCount: echo.likeCount + 1}, { new: true})

  res.json(updatedEcho)
}

module.exports = {getEchos, createEcho, updateEcho, deleteEcho, likeEcho}