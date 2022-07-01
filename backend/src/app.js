const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./middleware/auth");

app.use(
    "/api/v1/user",
    require("./modules/user/routes/api.user.route")
  );

app.use(
    "/api/v1/customer",
    require("./modules/customer/routes/api.customer.route")
  );

module.exports = app;
