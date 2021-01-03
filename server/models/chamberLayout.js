const mongoose = require("mongoose");

const chamberSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "user",
  },
  creator: {
    type: String,
  },
  title: {
    type: String,
  },
  videoLink: {
    type: String,
  },
  channel: {
    type: String,
  },
  notes: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
  tags: [String],
  echos: [
    {
      echo: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "echo",
      },
    },
  ],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ChamberLayout = mongoose.model("chamber", chamberSchema);

module.exports = ChamberLayout;
