import eventdb from "../models/events.js";
export const endEvent = (req, res) => {
  const data = req.body;
  eventdb.updateOne(
    { _id: data.id },
    {
      $set: { ended: true },
    },
    (err, data) => {
      if (err) res.status(500).send({ status: "Try again", err: err });
      else res.status(201).send({ status: "Event closed", data: data });
    }
  );
};
