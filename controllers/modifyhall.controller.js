import halldb from "../models/halls.js";
export const modifyHall = (req, res) => {
  const data = req.body;
  halldb.updateOne(
    { _id: data.id },
    {
      $set: { name: data.name },
      $set: { no: data.no },
      $set: { floor: data.floor },
      $set: { block: data.block },
      $set: { bookedDate: data.bookedDate },
      $set: { capcity: data.capcity },
      $set: { facility: data.facility },
      $set: { clg_name: data.clg_name },
      $set: { location: data.location },
      $set: { hallid: data.hallid },
    },
    (err, data) => {
      if (err) res.status(500).send({ status: "Try again", err: err });
      else res.status(201).send({ status: "Hall Modfied", data: data });
    }
  );
};
