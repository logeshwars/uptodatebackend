import mongoose from "mongoose";
import mongodb from "mongodb";
const userSchema = mongoose.Schema({
  name: String,
  dob: String,
  phno: { type: String },
  age: String,
  gender: String,
  college: String,
  dept: String,
  usertype: String,
  rollno: String,
  mailid: String,
  city: String,
  state: String,
  userid: String,
  events: [{ type: mongodb.ObjectId }],
});
export default mongoose.model('users',userSchema);
