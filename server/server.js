const user = require("./users.js")
const express = require("express");
var requestIp = require('request-ip');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8080, () => {
  console.log("Listening on port 8080.");
});

app.get("/about.json", (req, res) => {
  var ip = requestIp.getClientIp(req);
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }  
  var time = Math.floor(new Date().getTime() / 1000)
  const jso = {
    client: {ip},
    server: {
      current_time: time,
      services: [{
      }]
    }
  }
  res.status(200).json(jso);
});

app.post("/register", user.createUser);

app.post("/login", user.login);