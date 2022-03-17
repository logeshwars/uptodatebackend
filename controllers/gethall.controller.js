import halldb from "../models/halls.js";
export const getHall = (req, res) => {
  halldb.find((err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("No halls found");
    }
  });
};
