import halldb from "../models/halls.js";
export const bookHall = (req, res) => {
  const data = req.body;
  halldb.updateOne(
    { _id: data.id },
    {
      $set: { bookedDate: data.bookedDate },
    },
    (err, data) => {
      if (err) res.status(500).send({ status: "Try again", err: err });
      else res.status(201).send({ status: "Hall Booked", data: data });
    }
  );
};
