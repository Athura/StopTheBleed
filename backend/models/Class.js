const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sizeLimit: {
    type: Number,
    required: true
  },
  status: {
    type: String,
  },
  location: {
      type: String,
      required: true
  },
  students: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  rating: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Class = mongoose.model("class", ClassSchema);
