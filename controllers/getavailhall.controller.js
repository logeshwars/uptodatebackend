import halldb from "../models/halls.js";
export const getAvailHall = (req, res) => {
  const data = req.query;
  halldb.find({ $lt: { bookedDate: data.currentdate } }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("No Available halls");
    }
  });
};
