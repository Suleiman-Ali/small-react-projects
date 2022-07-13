const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cards = require("./routes/cards");

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use("/api/cards", cards);

const uri =
  "mongodb+srv://TRABUS_USER:12345@cluster0.yimei.mongodb.net/TRABUS?retryWrites=true&w=majority" ||
  "mongodb://localhost/TRABUS";

mongoose
  .connect(uri)
  .then(() => console.log(`Connected to ${uri}...`))
  .catch(() => console.log("Error Connecting to DB ..."));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Watching on port ${port} ...`));
