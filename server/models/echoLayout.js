const mongoose = require("mongoose");

const echoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "user",
  },
  chamber: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "chamber",
  },
  chamber_id: {
    type: String,
  },
  title: {
    type: String,
  },
  videoLink: {
    type: String,
  },
  author: {
    type: String,
  },
  bookLink: {
    type: String,
  },
  webLink: {
    type: String,
  },
  notes: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const EchoLayout = mongoose.model("echo", echoSchema);

module.exports = EchoLayout;