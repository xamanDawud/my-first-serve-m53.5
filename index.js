let express = require("express");
const phones = require("./phones.json");
let app = express();
let port = 5000;

app.get("/", (req, res) => {
  res.send("My first server ever");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let phone = phones.find((phone) => phone.id === id);
  res.send(phone);
});

app.listen(port, () => {
  console.log(`My first server is running on port: ${port}`);
});
