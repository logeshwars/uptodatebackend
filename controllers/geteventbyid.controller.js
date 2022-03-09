import eventdb from "../models/events.js";
export const getEventById = (req, res) => {
  const event = req.query;
  eventdb.find({ _id: event.id }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("Event not found");
    }
  });
};
