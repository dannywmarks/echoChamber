const EchoLayout = require('../models/echoLayout')

const getEchos = async (req, res, next) => {
  try {
    const echoLayouts =  await EchoLayout.find()
    console.log(echoLayouts)
    res.status(200).json(echoLayouts)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

const createEchos = async (req, res) => {
  const echo = req.body;
  const newEcho = new EchoLayout(echo)
  try {
    await newEcho.save()
    res.status(201).json(newEcho)
  } catch(err) {
    res.status(409).json({ message: err.message})
  }
}

module.exports = {getEchos, createEchos}