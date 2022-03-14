import halldb from "../models/halls.js";
export const deleteHall = (req, res) => {
  const data = req.query;
  halldb.deleteOne({ _id: data.id }, (err, data) => {
    if (err) res.status(500).send({ status: "Try again", err: err });
    else res.status(201).send({ status: "Hall Deleted", data: data });
  });
};
