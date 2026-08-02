const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    icon: {
      type: String,
      required: true,
    },

    about: {
      type: String,
      required: true,
    },

    whyItMatters: {
      type: String,
      required: true,
    },

    whyBootstack: {
      type: String,
      required: true,
    },

    whatWeDoBest: [
      {
        type: String,
      },
    ],

    process: {
      type: String,
      required: true,
    },

    buttonText: {
      type: String,
      default: "Explore Service",
    },

    buttonLink: {
      type: String,
      required: true,
    },

    order: {
      type: Number,
      default: 1,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);