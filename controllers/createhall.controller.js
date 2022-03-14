import halldb from "../models/halls.js";
export const createHall = (req, res) => {
  const hallData = req.body;
  halldb.create(hallData, (err, data) => {
    if (err) res.status(500).send({ status: "Try again", error: err });
    else res.status(201).send({ status: "hall created", data: data });
  });
};
