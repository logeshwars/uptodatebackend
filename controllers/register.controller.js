import userdb from "../models/users.js";
import eventdb from "../models/events.js";
export const register = (req, res) => {
  const data = req.body;
  eventdb.updateOne(
    { _id: data.eid },
    { $push: { registers: data.uid } },
    { safe: true, upsert: true },
    (err, data) => {
      if (err) res.status(500).send(err);
      else {
        userdb.updateOne(
          { _id: data.uid },
          { $push: { events: data.eid } },
          { safe: true, upsert: true },
          (err, data) => {
            if (err) res.status(500).send(err);
            else
              res
                .status(201)
                .send({ status: "Registered succesfully", data: data });
          }
        );
      }
    }
  );
};
