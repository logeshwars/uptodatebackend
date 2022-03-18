import mongoose from "mongoose";
const memberSchema = mongoose.Schema({
  name: String,
  phno: { type: String },
  gender: String,
  mailid: String,
  committe: String,
  positions: String,
});
export default mongoose.model("members", memberSchema);
