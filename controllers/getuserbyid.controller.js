import userdb from "../models/users.js";
export const getUserById = (req, res) => {
  const user = req.query;
  userdb.find({ _id: user.id }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("user not found");
    }
  });
};
