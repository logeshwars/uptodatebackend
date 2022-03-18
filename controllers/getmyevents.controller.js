import eventdb from "../models/events.js";
export const getMyEvents = (req, res) => {
  const user = req.query;
  eventdb.find({ registers: user.id }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      res.status(201).send(data);
    }
  });
};
