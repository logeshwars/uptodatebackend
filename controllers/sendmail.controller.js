import nodemailer from "nodemailer";
import eventdb from "../models/events.js";
import userdb from "../models/users.js";
import fs from "fs";
async function main(mailid) {
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
    subject: "Hello", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
      {
        // stream as an attachment
        filename: "image.jpg",
        content: fs.createReadStream("./wallpaperflare.com_wallpaper.jpg"),
      },
    ],
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
const sendMail = (req, res) => {
  let event = req.body;
  eventdb.find({ _id: event.id }, { _id: 0, registers: 1 }, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0)
        userdb.find({ _id: { $in: data[0].registers } }, (err, data) => {
          if (err) res.status(500).send(err);
          else {
            if (data.length > 0)
              data.map((u) => main(u.mailid).catch(console.error));
            else res.status(500).send("user not found");
          }
        });
    }
  });
  res.send("sucess");
};
export default sendMail;
