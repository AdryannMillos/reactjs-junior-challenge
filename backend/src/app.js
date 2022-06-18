const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    "/api/v1/user/",
    require("./modules/user/routes/api.user.route")
  );

module.exports = app;
