import eventdb from "../models/events.js";
export const deleteEvent = (req, res) => {
  const data = req.query;
  eventdb.deleteOne({ _id: data.id }, (err, data) => {
    if (err) res.status(500).send({ status: "Try again", err: err });
    else res.status(201).send({ status: "event Deleted", data: data });
  });
};
