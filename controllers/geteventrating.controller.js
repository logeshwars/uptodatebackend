import eventdb from "../models/events.js";
export const getRating = (req, res) => {
  const event = req.query;
  eventdb.find(
    { _id: event.id },
    { count: { $size: "$rating" }, rating: { $sum: "$rating" } },
    (err, data) => {
      if (err) res.status(500).send(err);
      else {
        if (data.length > 0) res.status(201).send(rating / count);
        else res.status(500).send("Cannot get rating");
      }
    }
  );
};
