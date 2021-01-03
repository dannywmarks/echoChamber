// rank, bio, interest[], school, chambers[]

const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "user",
  },
  selectedFile: String,
  rank: String,
  bio: String,
  interests: [String],
  school: String,
  chambers: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: "chamber",
    },
  ],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ProfileLayout = mongoose.model("profile", profileSchema);

module.exports = ProfileLayout;
