import mongoose from "mongoose";
import mongodb from "mongodb";
const eventSchema = mongoose.Schema({
  image_url: String,
  title: String,
  description: String,
  start_date: String,
  end_date: String,
  clg_name: String,
  location: String,
  venue: String,
  time: String,
  duration: String,
  google_form_link: String,
  coordinator_name: String,
  details: String,
  category: String,
  registers: [{ type: mongodb.ObjectId }],
});
export default mongoose.model("events", eventSchema);
