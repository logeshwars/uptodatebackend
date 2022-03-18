import halldb from "../models/halls.js";
export const getAvailHall = (req, res) => {
  halldb.find({ $lt: { bookedDate: new Date.now() } }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("No Available halls");
    }
  });
};
