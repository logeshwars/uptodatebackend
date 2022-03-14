import eventdb from "../models/events.js";
export const putfeedback = (req, res) => {
  const data = req.body;
  eventdb.updateOne(
    { _id: data.id },
    { $push: { feedback: { uid: data.uid, feedback: data.feedback } } },
    { safe: true, upsert: true },
    (err, data) => {
      if (err) res.status(500).send({ status: "Try again", err: err });
      else res.status(201).send({ status: "Feedback Created", data: data });
    }
  );
};
