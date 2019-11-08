const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }
  });

  const Event = mongoose.model("Event", eventSchema);

  module.exports = Event;