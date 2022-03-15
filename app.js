import express from "express";
import Cors from 'cors';
import user from "./router/user.js"
import event from "./router/event.router.js";
import mail from "./router/mailsender.router.js";
import hall from "./router/hall.router.js";
import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";
const swaggerDocument = JSON.parse(
  await readFile(new URL("./swagger.json", import.meta.url))
);
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 9000;
const connectionURL =
  "mongodb+srv://uptodate:up2date@cluster0.koaoa.mongodb.net/uptodatedb?retryWrites=true&w=majority";
mongoose.connect(connectionURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
// console.log(db);
db.once("open", () => console.log("connected"));
app.use(Cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("requested");
  res.send("hello");
  res.end;
});
app.use("/user", user);
app.use("/event", event);
app.use("/mail", mail);
app.use("/hall", hall);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`App listening on port ${port}! `);
});