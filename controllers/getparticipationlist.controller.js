import eventdb from "../models/events.js";
import userdb from "../models/users.js";
export const getPaticitpationList = (req, res) => {
  const event = req.query;
  let userList = [];
  eventdb.find({ _id: event.id }, { registers: 1, _id: 0 }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      userList = data[0].registers;
      userdb.find({ _id: { $in: userList } }, (err, data) => {
        if (err) res.status(500).send(err);
        else {
          if (data.length > 0) res.status(201).send(data);
          else res.status(500).send("Cannot get List");
        }
      });
    }
  });
};
