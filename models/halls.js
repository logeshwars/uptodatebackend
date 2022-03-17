import mongoose from "mongoose";
const hallSchema = mongoose.Schema({
  name: String,
  no: String,
  floor: String,
  block: String,
  bookedDate: Date,
  capcity: Number,
  clg_name: String,
  location: String,
  facility: String,
});
export default mongoose.model("halls", hallSchema);
