const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    Title: { type: String, required: true }
  });

  const Event = mongoose.model("Event", eventSchema);

  module.exports = Event;