import eventdb from "../models/events.js";
export const modifyEvent = (req, res) => {
  const data = req.body;
  eventdb.updateOne(
    { _id: data.id },
    {
      $set: { image_url: data.image_url },
      $set: { title: data.title },
      $set: { description: data.description },
      $set: { start_date: data.start_date },
      $set: { end_date: data.end_date },
      $set: { time: data.time },
      $set: { duration: data.duration },
      $set: { google_form_link: data.google_form_link },
      $set: { coordinator_name: data.coordinator_name },
      $set: { details: data.details },
      $set: { category: data.category },
      $set: { guest_name: data.guest_name },
      $set: { guest_organisation: data.guest_organisation },
      $set: { guest_field: data.guest_field },
      $set: { guest_exp: data.guest_exp },
      $set: { guest_email: data.guest_email },
    },
    (err, data) => {
      if (err) res.status(500).send({ status: "Try again", err: err });
      else res.status(201).send({ status: "Event Modfied", data: data });
    }
  );
};
