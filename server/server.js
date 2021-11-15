const express = require("express");
var requestIp = require('request-ip');
const app = express();
app.listen(8080, () => {
  console.log("Listening on port 8080.");
});

app.get("/about.json", (req, res) => {
  var ip = requestIp.getClientIp(req);
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }  
  const jso = {
    client: ip,
  }
  res.status(200).json(jso);
})