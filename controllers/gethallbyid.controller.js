import halldb from "../models/halls.js";
export const getHallById = (req, res) => {
  const hall = req.query;
  halldb.find({ _id: hall.id }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("Hall not found");
    }
  });
};
