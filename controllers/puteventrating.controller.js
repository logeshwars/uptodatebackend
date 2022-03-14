import eventdb from "../models/events.js";
export const putRating = (req, res) => {
  const data = req.body;
  eventdb.updateOne(
    { _id: data.eid },
    { $push: { rating: data.rating } },
    { safe: true, upsert: true },
    (err, data) => {
      if (err) res.status(500).send({ status: "Try again", error: err });
      else res.status(201).send({ status: "Rated succesfully", data: data });
    }
  );
};
