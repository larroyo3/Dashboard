const express = require("express");
const app = express();
app.listen(8080, () => {
  console.log("Listening on port 8080.");
});
  app.get("/about.json", (req, res) => {
    res.send("Salut")
  })