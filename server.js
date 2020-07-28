
const express = require("express");
const app = express();

var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  app.set('trust proxy', true)
  console.log(req.ips)
  res.json({ "ipaddress": req.ip, "language": req.headers["accept-language"], "software": req.headers["user-agent"] })
})


const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});