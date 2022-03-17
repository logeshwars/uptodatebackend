import userdb from "../models/users.js";
export const getAllUser = (req, res) => {
  const user = req.query;
  userdb.find((err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("User not found");
    }
  });
};
