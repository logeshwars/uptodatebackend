import nodemailer from "nodemailer";
import eventdb from "../models/events.js";
import membersdb from "../models/members.js";
import hallsdb from "../models/halls.js";
import fs from "fs";
async function main(mailid, details) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "aicteup2date@gmail.com",
      pass: "aicteuptodate",
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"AICTE up2date" <aicteup2date@gmail.com>', // sender address
    to: mailid, // list of receivers
    subject: "Event update", // Subject line
    text: details, // plain text body
    // html: "<b>Hello world?</b>", // html body
    // attachments: [
    //   {
    //     // stream as an attachment
    //     filename: "image.jpg",
    //     content: fs.createReadStream("./wallpaperflare.com_wallpaper.jpg"),
    //   },
    // ],
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
const sendMail = (req, res) => {
  let event = req.body;
  eventdb.find({ _id: event.id }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) {
        eventDetails = data;
        membersdb.find(
          { _id: data.committeid },
          { _id: 0, mailid: 1 },
          (err, members) => {
            if (err) res.status(500).send(err);
            else {
              hallsdb.find({ _id: data.hallid }, (err, hall) => {
                if (err) res.status(500).send(err);
                else {
                  const main = `The Event ${category} ${data.title} is  about ${data.description}.
              is going to start on ${data.start_date} and it will end ${end_date}.
              The time will start on ${data.time} and it is going to happen for  ${data.duration}.
              The ${data.committe} will organize the event the coordinator is ${coordinator_name}.
              The guest ${guest_name} from ${guest_organisation} working as ${guest_field} for ${guest_exp}.
              You can contact throw ${guest_email}.The venue will be ${hall.name} hall ${hall.block} block
               ${hall.floor} floor ${hall.clg_name} ${hall.location}. 
              `;
                  members.map((u, index) => {
                    main(u.mailid, details).catch(console.error);
                    if (index === u.length - 1)
                      res.status(201).send("success full");
                  });
                }
              });
            }
          }
        );
      }
    }
  });
  res.send("sucess");
};
export default sendMail;
