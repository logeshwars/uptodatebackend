import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: String,
  dob: String,
  phno: {type: String},
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
});
export default mongoose.model('users',userSchema);
