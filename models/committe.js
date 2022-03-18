import mongoose from "mongoose";
const committeSchema = mongoose.Schema({
  name: String,
  members: [String],
});
export default mongoose.model("committies", committeSchema);
