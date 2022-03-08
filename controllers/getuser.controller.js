import userdb from "../models/users.js";
export const getUser = (req, res) => {
  const user = req.query;
  userdb.find({ mailid
: user.email }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("User not found");
    }
  });
};
