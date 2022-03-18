import halldb from "../models/halls.js";
export const getAvailHall = (req, res) => {
  console.log(new Date());
  halldb.find({ bookedDate: { $lt: new Date() } }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("No Available halls");
    }
  });
};
