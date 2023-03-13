const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.json({
    ip: req.ip,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
